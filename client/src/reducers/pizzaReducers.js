export const getAllPizzasReducer=(state={pizzas: []},action)=>{
    switch(action.type) {
       case 'Get_Pizzas_Request' : return{
        loading:true,
        ...state
       }
       case "Get_Pizzas_Success" : return{
        loading:false,
        pizzas: action.payload
       }
       case "Get_Pizzas_Failed": return{
        loading:false,
        error: action.payload
       }
       default: return state
    }
}