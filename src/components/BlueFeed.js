import axios from "axios";

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy'

const BlueFeed = ({ postData, toggleFetch, setToggleFetch }) => {
  
  const deleteUserComment = async () => {
    console.log('deleting'); 

  
    await axios.delete(API_URL + `&records[]=${postData.id}`);
    
    setToggleFetch(!toggleFetch);
  };

  return ( 
    <div>
      <p>User: {postData.fields.user}</p>
      <p>Comment: {postData.fields.comment}</p>
      <button onClick={deleteUserComment}>Delete</button>
      < hr />
    </div>
  ) 
}

export default BlueFeed;