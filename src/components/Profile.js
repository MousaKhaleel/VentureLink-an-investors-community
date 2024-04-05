import { useContext } from "react";
import { UserContext } from "./UserContext";


function Profile() {
    
    const { user, userEmail, userPassword } = useContext(UserContext);
    // , UserType
    return ( 
        <main>
        {/* {loading && <h2 className="hl">Loading...</h2>} */}
        <div className="detailsContainer">
<div className="card m-auto" style={{ width: "18rem" }}>
  <div className="card-header"><h3>Account Details:</h3></div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name: {user}</li>
    <li className="list-group-item">Email: {userEmail}</li>
    <li className="list-group-item">Password: {userPassword}</li>
    {/* <li className="list-group-item">Password: {UserType}</li> */}
  </ul>
</div>
        </div>
        </main>
     );
}

export default Profile;