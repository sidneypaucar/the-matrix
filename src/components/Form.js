import "../App.css";
import axios from "axios";
import { useState } from "react";

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy'

const Form = ({ postData, toggleFetch, setToggleFetch }) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const handleSubmit = async (ev) => {
    ev.preventDefault();

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
    <div className="Form-Box">
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="user">User: </label>
        <input value={user} type="text" id="user" onChange={(ev) => setUser(ev.target.value)}/>
        <br />
        <label htmlFor="commment">Comment: </label>
        <textarea value={comment} type="text" id="comment" onChange={(ev) => setComment(ev.target.value)} />
        <br />
        <br /> 
        <input type="submit"/>
      </form> 
    </div>
  ) 
}

export default Form;