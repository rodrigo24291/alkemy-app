const dataInicial = {
    vegana: [],
    carnivora: [],
    precio:0,
    healtscore:0,
    readyInMinutes:0,
    cantidad:0

}

// types
const AGREGAR_COMIDA_VEGANA_EXITO = 'AGREGAR_COMIDA_VEGANA_EXITO'
const AGREGAR_COMIDA_CARNIVORA_EXITO = 'AGREGAR_COMIDA_CARNIVORA_EXITO'
const BORRAR_COMIDA_EXITO = 'BORRAR_COMIDA_EXITO'


// reducer
export default function Comidareducer(state = dataInicial, action) {
    switch (action.type) {
        case AGREGAR_COMIDA_VEGANA_EXITO:
            
            return { ...state, carnivora: action.payload.carnivora, vegana: action.payload.vegana,precio:action.payload.precio,healtscore:action.payload.healtscore,
                readyInMinutes:action.payload.readyInMinutes,cantidad:action.payload.cantidad }

        case AGREGAR_COMIDA_CARNIVORA_EXITO:
            return { ...state, carnivora: action.payload.carnivora, vegana: action.payload.vegana,precio:action.payload.precio,healtscore:action.payload.healtscore,
                readyInMinutes:action.payload.readyInMinutes,cantidad:action.payload.cantidad
            
            }

            
        case BORRAR_COMIDA_EXITO:
            return { ...state, carnivora: action.payload.carnivora, vegana: action.payload.vegana,precio:action.payload.precio,healtscore:action.payload.healtscore,
                readyInMinutes:action.payload.readyInMinutes,cantidad:action.payload.cantidad }

        default:
            return state
    }
}

// actions
export const agregarcomidas = (comida) => (dispatch, getState) => {
    const { carnivora } = getState().Comidas
    const { vegana } = getState().Comidas
    const { precio } = getState().Comidas
    const { healtscore } = getState().Comidas
    const { readyInMinutes } = getState().Comidas
    const { cantidad } = getState().Comidas
    
    if (comida.vegan && vegana.length<2 ) {

        dispatch({
            type: 'AGREGAR_COMIDA_VEGANA_EXITO',
            payload: {
                carnivora,
                vegana: [...vegana, comida],
                precio:precio+comida.pricePerServing,
                healtscore:healtscore+comida.healthScore,
                readyInMinutes:readyInMinutes+comida.readyInMinutes,
                cantidad:cantidad+1
            }
        })
         

    }
    else if(!comida.vegan && carnivora.length<2) {
        dispatch({
            type: 'AGREGAR_COMIDA_CARNIVORA_EXITO',
            payload: {
                carnivora:[...carnivora,comida],
                vegana: vegana,
                precio:precio+comida.pricePerServing,
                healtscore:healtscore+comida.healthScore,
                readyInMinutes:readyInMinutes+comida.readyInMinutes,
                cantidad:cantidad+1
            }
        })

    }

    

}

export const borrarcomidas = (id) => (dispatch, getState) => {
    const { precio } = getState().Comidas
    const { carnivora } = getState().Comidas
    const { vegana } = getState().Comidas

    const {healtscore}=getState().Comidas
    const {readyInMinutes}=getState().Comidas
    const { cantidad } = getState().Comidas
    


    dispatch({

    type:'BORRAR_COMIDA_EXITO',
    payload:{vegana:vegana.filter(car=>car.id!==id.id),
        carnivora:carnivora.filter(car=>car.id!==id.id),
        precio:precio-id.pricePerServing <= 0 ? 0 : precio-id.pricePerServing,
        healtscore:healtscore-id.healthScore,
        readyInMinutes:readyInMinutes-id.readyInMinutes,
        cantidad:cantidad-1
    }
})


} 