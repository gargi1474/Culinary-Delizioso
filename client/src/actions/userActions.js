import axios from "axios";

export const registerUser=(user)=>async dispatch=>{
    dispatch({type:"User_Register_Request"})

    try {
        const response = await axios.post('/api/users/register',user)
        console.log(response);
        dispatch({type:"User_Register_Success"})
    } catch (error) {
        dispatch({type:"User_Register_Failed",payload: error})
    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:"User_Login_Request"})

    try {
        const response = await axios.post('/api/users/login',user)
        console.log(response);
        dispatch({type:"User_Login_Success",payload:response.data})
        localStorage.setItem("currentUser",JSON.stringify(response.data))
        window.location.href = "/"
    } catch (error) {
        dispatch({type:"User_Login_Failed",payload: error})
    }
}

export const logoutUser=()=>dispatch=>{
localStorage.removeItem("currentUser")
window.location.href = "/login"
}