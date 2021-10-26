import axios from "axios";

import { useEffect, useState } from "react";

import UserComments from "./components/userComments.js";


function App() {
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    console.log('Getting User Comments');

    const getUserComments = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy');
      console.log(resp.data);
      setUserComments(resp.data.records);
    }

    getUserComments();
  }, []);

  return (
    <div>
      {userComments.map((userComments) => (
        <h1 key = {userComments.id}>Author: {userComments.fields.author}</h1>
      ))}
    </div>
  );
}

export default App;
