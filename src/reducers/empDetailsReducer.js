const empDetailsReducer = (state ={
    employeeDetails: {},
    fetched: false,
    error: null
}, action) => {
    switch(action.type) {
        case "FETCH_EMP_DETAILS_REQUEST": 
            state = {
                ...state,
                fetching: true
            };
        break;
        case "FETCH_EMP_DETAILS_REJECTED":
            state = {
                ...state,
                fetching: false,
                error: action.payload
            }
        break;
        case "FETCH_EMP_DETAILS_FULFILLED" :
        state = {
            ...state,
            fetching: false,
            fetched: true,
            employeeDetails: action.payload
        }
        break;
        case "RESET_EMP_DATA" :
        state = {
            ...state,
            employeeDetails: {},
            fetching: undefined,
            isResetData: true
        }
        break;
        default:
            return state;
    }
    return state;
};

export default empDetailsReducer;