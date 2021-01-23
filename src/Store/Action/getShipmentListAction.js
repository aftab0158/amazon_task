import axios from 'axios';


export const GET_MY_ALL_SHIPMENT_LIST_START = "GET_MY_ALL_SHIPMENT_LIST_START";
export const GET_MY_ALL_SHIPMENT_LIST_FAILURE = "GET_MY_ALL_SHIPMENT_LIST_FAILURE";
export const GET_MY_ALL_SHIPMENT_LIST_SUCCESS = "GET_MY_ALL_SHIPMENT_LIST_SUCCESS";
export const GET_MY_ALL_SHIPMENT_LIST_ERROR = "GET_MY_ALL_SHIPMENT_LIST_ERROR";

export const getShipmentListAction = () => {
    // console.log("Inside getShipmentListAction...");

    return dispatch => {
        dispatch({ type: GET_MY_ALL_SHIPMENT_LIST_START })
        return axios.get(`https://api.spacexdata.com/v3/history`)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    dispatch({ type: GET_MY_ALL_SHIPMENT_LIST_SUCCESS, payload: res.data })
                } else {
                    dispatch({ type: GET_MY_ALL_SHIPMENT_LIST_FAILURE, payload: res.data.message })
                }
            })
            .catch(err => {
                dispatch({ type: GET_MY_ALL_SHIPMENT_LIST_ERROR, payload: err })
            })
    }
}


