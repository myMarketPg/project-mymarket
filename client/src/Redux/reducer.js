const initialState = {
    admins: [],
    user: [],
    allUsers: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return {
                ...state,
                user: action.payload,
                allUsers: action.payload
            }
        default: return state
    }

}

export default rootReducer