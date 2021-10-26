import axios from "axios";

import { useEffect, useState } from "react";

import UserComments from "./components/userComments.js";

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
