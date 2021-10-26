const UserComments = ({postData}) => {
  return (
    <div>
      <h1>User: {postData.fields.user}</h1>
      <p>{postData.fields.comment}</p>
    </div>
  )
}

export default UserComments;