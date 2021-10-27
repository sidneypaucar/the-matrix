import axios from "axios";

import { useEffect, useState } from "react";

import BlueFeed from "./components/BlueFeed";

import RedFeed from "./components/RedFeed";

import { Route , Link } from "react-router-dom";




const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy';

function App() {
  const [userComments, setUserComments] = useState([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    console.log('Getting User Comments');

    const getUserComments = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setUserComments(resp.data.records);
    }

    getUserComments();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('form submitted');

    const newUserComment = {
      records: [
        {
          fields: {
            user,
            comment
          }
        }
      ]
    }

    await axios.post(API_URL, newUserComment)
    setToggleFetch(!toggleFetch);
  }







  return (
    <div>
      <Route exact path="/">
        <h1>Home Route</h1> 
      </Route>

      <nav>
        <Link to="/bluefeed">Blue</Link>
        <Link to ="/redfeed">Red</Link>
      </nav>
      <hr /> 



      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User: </label>
        <input value={user} type="text" id="user" onChange={(ev) => setUser(ev.target.value)}/>

        <label htmlFor="commment">Comment: </label>
        <input value={comment} type="text" id="comment" onChange={(ev) => setComment(ev.target.value)}/>

        <input type="submit" />
      </form>

      



      
      <Route path="/bluefeed">
        <h1> You chose the blue button</h1>
      {userComments.map((userComment) => (
        <BlueFeed
          key={userComment.id} 
          postData={userComment}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      ))}
      </Route>

      




      <Route path="/redfeed">
        <h1> You chose the red button</h1>
      {userComments.map((userComment) => (
        <RedFeed
          key={userComment.id} 
          postData={userComment}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      ))}
      </Route>

      


    </div>
  );
}

export default App;
