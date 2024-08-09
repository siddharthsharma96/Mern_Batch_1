const UserCardwithExtraField = (Component) => {
  return function EnhancedComponent(props) {
    console.log(props);
    const isStudent = props.user.isStudent !== undefined;
    return (
      <div className="container">
        <Component {...props} />
        {isStudent && <p className="a">{props.user.isStudent}</p>}
      </div>
    );
  };
};

export default UserCardwithExtraField;
