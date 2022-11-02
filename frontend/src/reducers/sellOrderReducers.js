import {
  SELL_ORDER_CREATE_REQUEST,
  SELL_ORDER_CREATE_SUCCESS,
  SELL_ORDER_CREATE_FAIL,
} from "../constants/orderConstants";

const initialState = {
  loading: false,
  sellOrder: {},
  sellAddress: {}
};
export const orderCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELL_ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        sellOrder: action.payload,
      };
    case SELL_ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELL_ORDER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELL_ORDER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        sellAddress: action.payload,
      };
    case SELL_ORDER_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

