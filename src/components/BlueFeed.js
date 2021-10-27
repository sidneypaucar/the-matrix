const BlueFeed = ({postData}) => {
  
  const deleteUserComment = () => {
    console.log('deleting');
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