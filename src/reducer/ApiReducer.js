import axios from "axios"
const dataInicial = {
    api: []
}

// types
const GET_API_EXITO = 'GET_API_EXITO'

// reducer
export default function Apireducer(state = dataInicial, action){
switch (action.type) {
    case GET_API_EXITO:
        return{...state,api:action.payload}
        

    default:
return state}
}

// actions
export const obtenerApi = (resultado) => async (dispatch) => {
    
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=eba052f4f263411db24ff9270cd1d6d6&query=pasta?&addRecipeInformation=true`)
    .then(response => dispatch({
        type:GET_API_EXITO,
        payload:response
    }))
    .catch(error => {
        console.log('error')
    });


}