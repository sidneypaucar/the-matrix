import axios from "axios";

import { useEffect, useState } from "react";

import BlueFeed from "./components/BlueFeed";

import RedFeed from "./components/RedFeed";


import { Route , Link } from "react-router-dom";




const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy';

function App() {
  const [userComments, setUserComments] = useState([]);
  
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



  return (
    <div>
      <Route path="/">
        <h1>ESCAPE FROM REALITY</h1> 
      </Route>

      <nav>
        <Link to="/bluefeed">Blue Pill</Link>
        <hr /> 
        <Link to ="/redfeed">Red Pill</Link>
      </nav>


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
