import axios from 'axios';

export function fetchEmpDetails (empId)  {
    return function(dispatch) {
        axios.get(`https://reqres.in/api/users/${empId}`)
        .then((response) => {
            dispatch({type: "FETCH_EMP_DETAILS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_EMP_DETAILS_REJECTED", payload: err})
        })
    }
};

export function resetEmployeeDetails (empData) {
    return function(dispatch) {
        dispatch({type: "RESET_EMP_DATA", payload: empData})
    }
};

