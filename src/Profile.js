const Profile = ({ userName, name }) => {
  return (
    <div>
      <b>{userName}</b>
      <span>({name})</span>
    </div>
  );
};

export default Profile;
