export const todoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case 'ABC':

            return  new Error('Action.type = ABC no esta implementada')
    
        default:
            return initialState
    }
}