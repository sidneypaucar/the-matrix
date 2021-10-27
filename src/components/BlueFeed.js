import axios from "axios";

import { useState } from "react";

import ReactPlayer from "react-player";

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy'

const BlueFeed = ({ postData, toggleFetch, setToggleFetch }) => {
  
  const deleteUserComment = async () => {
    console.log('deleting'); 
    await axios.delete(API_URL + `&records[]=${postData.id}`);
    setToggleFetch(!toggleFetch);
  };

  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

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
      <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9ix7TUGVYIo"
      />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User: </label>
        <input value={user} type="text" id="user" onChange={(ev) => setUser(ev.target.value)}/>

        <label htmlFor="commment">Comment: </label>
        <input value={comment} type="text" id="comment" onChange={(ev) => setComment(ev.target.value)}/>

        <input type="submit" />
      </form> 














      <p>User: {postData.fields.user}</p>
      <p>Comment: {postData.fields.comment}</p>
      <button onClick={deleteUserComment}>Delete</button>
      < hr />


    </div>
  ) 
}

export default BlueFeed;