import "../App.css";

import axios from "axios";

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy'

const BlueFeed = ({ postData, toggleFetch, setToggleFetch }) => {
  
  const deleteUserComment = async () => {
    
    await axios.delete(API_URL + `&records[]=${postData.id}`);
    
    setToggleFetch(!toggleFetch);
  };
  
  return (
    <div className="Comment-Box">
      <h2 className="User-Feed">Username</h2>
      <h2 className="User-Name">{postData.fields.user}</h2>
      <h4 className="User-Comment">{postData.fields.comment}</h4>
      <button onClick={deleteUserComment}>Delete</button>
    </div>
  ) 
}

export default BlueFeed;