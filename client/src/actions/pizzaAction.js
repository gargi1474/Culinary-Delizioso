import axios from "axios"

export const getAllPizzas =()=>async dispatch=>{

    dispatch({type: 'Get_Pizzas_Request'})

    try{
      const response= await axios.get("./api/pizzas/getallpizzas")
      console.log(response);
      dispatch({type: 'Get_Pizzas_Success', payload: response.data})
    } catch(error){
       
        dispatch({type: 'Get_Pizzas_Failed',payload: error})
    }
}

//payload is a property which is used to carry additional data along with action