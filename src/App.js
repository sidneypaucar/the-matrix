import axios from "axios";

import { useEffect, useState } from "react";

import BlueFeed from "./components/BlueFeed";

import { Route } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy';

function App() {
  const [userComments, setUserComments] = useState([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    console.log('Getting User Comments');

    const getUserComments = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setUserComments(resp.data.records);
    }

    getUserComments();
  }, []);

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

    await axios.post( API_URL ,newUserComment )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User: </label>
        <input value={user} type="text" id="user" onChange={(ev) => setUser(ev.target.value)}/>

        <label htmlFor="commment">Comment: </label>
        <input value={comment} type="text" id="comment" onChange={(ev) => setComment(ev.target.value)}/>

        <input type="submit" />
      </form>

      <hr />

      <Route path="/bluefeed">
      {userComments.map((userComment) => (
        <BlueFeed
          key={userComment.id}
          postData={userComment}
        />
      ))}
      </Route>




    </div>
  );
}

export default App;
