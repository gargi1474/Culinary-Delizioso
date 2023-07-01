export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case "Place_Order_Request":
        return {
          loading: true
        };
      case "Place_Order_Success":
        return {
          loading: false,
          success: true
        };
      case "Place_Order_Failed":
        return {
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export const getUserOrdersReducer=(state={orders: []},action)=>{
    switch(action.type) {
       case 'Get_User_Orders_Request' : return{
        loading:true,
        ...state
       }
       case "Get_User_Orders_Success" : return{
        loading:false,
        orders: action.payload
       }
       case "Get_User_Orders_Failed": return{
        loading:false,
        error: action.payload
       }
       default: return state
    }
}
  