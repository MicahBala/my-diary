import avatar from "../assets/images/avatar.jpeg";

const Topbar = () => {
  const user = true;
  return (
    <div className="topbar-wrapper">
      <div className="container topbar">
        <span className="logo">My Diary</span>
        <div className="topbar-right">
          {user ? (
            <img className="topbar-right-img" src={avatar} alt="" />
          ) : (
            <span className="auth">REGISTER</span>
          )}
          <span>{user && "Welcome, Micah!"}</span>
          <span className="auth">{user ? "LOGOUT" : "LOGIN"}</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
