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
    console.log(response);
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
      console.log(response);
      dispatch({type: 'Get_User_Orders_Success', payload: response.data})
    } catch(error){
       
        dispatch({type: 'Get_User_Orders_Failed',payload: error})
    }
}
