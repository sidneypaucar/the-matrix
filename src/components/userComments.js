const UserComments = ({postData}) => {
  return (
    <div>
      <h1>User: {postData.fields.user}</h1>
    </div>
  )
}

export default UserComments;