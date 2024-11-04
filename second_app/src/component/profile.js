import Bio from "./bio";
const Profile = (props)=>{
    const {name,age,bio}=props;

    return(
        <div>
            <h1> Profile</h1>
            <h2> Name: {name}</h2>
            <p>Age: {age}</p>
            <Bio bio = {bio}/> 
        </div>
    )   
}

export default Profile;