import React from 'react'
import UserContext from '../Context/UserContext'



function Profile() {
    const {user} = React.useContext(UserContext);

    
        if(!user) return <div> please login </div>
        return <div>welcone {user.username} to profile</div>
    

}

export default Profile
