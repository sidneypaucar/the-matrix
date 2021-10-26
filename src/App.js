import axios from "axios";

import { useEffect, useState } from "react";

import UserComments from "./components/userComments.js";


function App() {
  const [userComments, setUserComments] = useState([]);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    console.log('Getting User Comments');

    const getUserComments = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy');
      console.log(resp.data);
      setUserComments(resp.data.records);
    }

    getUserComments();
  }, []);

  const handleSubmit = () => {
    console.log('form submitted');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User: </label>
        <input type="text" id="user" onChange={(ev) => setUser(ev.target.value)}/>

        <label htmlFor="commments">Comment: </label>
        <input type="text" id="comment" onChange={(ev) => setComment(ev.target.value)}/>

        <input type="submit" />
      </form>

      <hr />

      {userComments.map((userComments) => (
        <UserComments
          key={userComments.id}
          postData={userComments}
        />
      ))}
    </div>
  );
}

export default App;
