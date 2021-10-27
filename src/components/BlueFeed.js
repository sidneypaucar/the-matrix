import axios from "axios";

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy'

const BlueFeed = ({ postData }) => {
  
  const deleteUserComment = async () => {
    console.log('deleting'); 

  
    await axios.delete( API_URL+`&records[]=${postData.id}`);
  };

  return ( 
    <div>
      <h1>User: {postData.fields.user}</h1>
      <p>{postData.fields.comment}</p>
      <button onClick={deleteUserComment}>Delete</button>
    </div>
  ) 
}

export default BlueFeed;