import axios from 'axios';

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: 'Place_Order_Request' });

  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post('/api/orders/placeOrder', {
      token,
      subTotal,
      currentUser,
      cartItems
    });
    dispatch({ type: 'Place_Order_Success', payload: response.data });
<<<<<<< HEAD
    //console.log(response);
=======
    console.log(response);
>>>>>>> 6dba03dd910bc4c6f781ae4d1c87ff4fa84da250
  } catch (error) {
    dispatch({ type: 'Place_Order_Failed' });
    console.log(error);
  }
};


export const getUserOrders =()=>async (dispatch,getState)=>{
    const currentUser=getState().loginUserReducer.currentUser;
    dispatch({type: 'Get_User_Orders_Request'})

    try{
      const response= await axios.post("/api/orders/getuserorders", {userid:currentUser._id})
<<<<<<< HEAD
      //console.log(response);
=======
      console.log(response);
>>>>>>> 6dba03dd910bc4c6f781ae4d1c87ff4fa84da250
      dispatch({type: 'Get_User_Orders_Success', payload: response.data})
    } catch(error){
       
        dispatch({type: 'Get_User_Orders_Failed',payload: error})
    }
}

export const getAllOrders = () => async (dispatch, getState) => {
  
  dispatch({
    type: "All_Order_Request",
  });
  try {
    const response = await axios.get("/api/orders/alluserorder");
    dispatch({ type: "All_Order_Success", payload: response.data });
  } catch (error) {
    dispatch({ type: "All_Order_Fail", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  
  dispatch({
    type: "Get_All_Order_Request",
  });
  try {
    await axios.post("/api/orders/deliverorder", { orderid });
    alert("Delivered Successfully");
    const orders = await axios.get("/api/orders/alluserorder");
    dispatch({ type: "Get_All_Order_Success", payload: orders.data });
    window.location.href = "/admin";
  } catch (error) {
    dispatch({ type: "Get_All_Order_Fail", payload: error });
  }
};
