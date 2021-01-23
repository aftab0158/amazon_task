
export const GET_MY_ALL_SHIPMENT_LIST_START = "GET_MY_ALL_SHIPMENT_LIST_START";
export const GET_MY_ALL_SHIPMENT_LIST_FAILURE = "GET_MY_ALL_SHIPMENT_LIST_FAILURE";
export const GET_MY_ALL_SHIPMENT_LIST_SUCCESS = "GET_MY_ALL_SHIPMENT_LIST_SUCCESS";
export const GET_MY_ALL_SHIPMENT_LIST_ERROR = "GET_MY_ALL_SHIPMENT_LIST_ERROR";

const initialState = {
  gettingShipmentDetails: false,
  gotShipmentDetails: false,
  gettingShipmentDetailsError: null,
  getShipmentDetailsData: []
}

export const getShipmentListReducer = (state = initialState , action) => {
  //console.log(action);
  switch(action.type) {
    case GET_MY_ALL_SHIPMENT_LIST_START:
      return {
        ...state,
        gettingShipmentDetails: true
      };
    case GET_MY_ALL_SHIPMENT_LIST_FAILURE:
      return {
        ...state,
        gettingShipmentDetails: false,
        gettingShipmentDetailsError: action.payload
      };
    case GET_MY_ALL_SHIPMENT_LIST_SUCCESS:
    //   console.log("Inside getShipmentListReducer : Success");
      console.log(action.payload);      
      return {
        ...state,
        gettingShipmentDetails: false,
        gotShipmentDetails: true,
        getShipmentDetailsData: action.payload
      };
    default:
      return state;
  }
}