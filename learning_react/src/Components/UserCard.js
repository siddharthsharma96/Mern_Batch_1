const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="">
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserCard;
