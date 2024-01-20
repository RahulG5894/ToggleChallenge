import { useState } from "react";

const UserChallenge = () => {
    const [user, setUser] = useState(null);
    const login = () => {
        setUser({name: "john"})
    }
    const logout = () => {
        setUser(null)
    }
    return <>
        {user ? <div>
            <h3>Hello there, {user.name}</h3>
            <button onClick={logout} >LogOut</button>
        </div> : <div>
            <h3>Please Login</h3>
            <button onClick={login} >LogIn</button>
        </div>}
    </>
}

export default UserChallenge;