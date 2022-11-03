import {
  SELL_ORDER_CREATE_REQUEST,
  SELL_ORDER_CREATE_SUCCESS,
  SELL_ORDER_CREATE_FAIL,
  SELL_DETAILS_FAIL,
  SELL_DETAILS_REQUEST,
  SELL_DETAILS_SUCCESS,
  SELL_ORDER_ADDRESS_FAIL,
  SELL_ORDER_ADDRESS_REQUEST,
  SELL_ORDER_ADDRESS_SUCCESS,
} from "../constants/sellOrderConstants";

const initialState = {
  loading: false,
  sellOrder: {},
  sellAddress: {},
  allSellOrders: [],
};
export const sellOrderReducer = (state = initialState, action) => {
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
    case SELL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        allSellOrders: action.payload,
      };
    case SELL_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
