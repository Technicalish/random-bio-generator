function Profile(props) {
var name = decodeURIComponent(window.location.pathname).substring(1) || props.name;
  return (
    <>
    <img className="profile-l-avatar" src={`https://i.pravatar.cc/500?u=${name}`} alt={`${name}'s avatar`} style={{ height: `${document.body.clientWidth}px` }}/>
    <div className="profile-name">
      <p>{name}</p>
    </div>
    </>
  );
}
export default Profile;