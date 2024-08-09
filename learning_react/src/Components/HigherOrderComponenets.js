function UserCard({ user }) {
  return (
    <div className="container">
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
}
// HOC

function UserCardwithExtraField(Component) {
  console.log(Component);
  return function EnhancedComponent(props) {
    const isStudent = props.user.isStudent !== undefined;
    return (
      <div>
        <Component {...props} />;{isStudent && <p>{props.user.isStudent}</p>}
      </div>
    );
  };
}
const UserCardswithNewDta = UserCardwithExtraField(UserCard);

function HOFUsageFunction() {
  const users = [
    {
      id: 1,
      name: "sid",
    },
    {
      id: 2,
      name: "lalit",
      isStudent: "true",
    },
    { id: 3, name: "Deepak" },
  ];
  return (
    <div>
      {users.map((user) => {
        return <UserCardswithNewDta key={user.id} user={user} />;
      })}
    </div>
  );
}

export default HOFUsageFunction;
