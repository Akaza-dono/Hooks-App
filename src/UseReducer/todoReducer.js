export const todoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            return initialState.filter(e => e.id !== parseInt(action.payload) )
        case  '[TODO] Toggle Todo':
            return initialState.map(e => {
                if(e.id === action.payload){
                    return{
                        ...e,
                        done: !e.done
                    }
                }
                return e;
            })
        default:
            return initialState
    }
}