import axios from "axios";
// import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import {
  SELL_ORDER_CREATE_REQUEST,
  SELL_ORDER_CREATE_SUCCESS,
  SELL_ORDER_CREATE_FAIL,
  SELL_ORDER_ADDRESS_REQUEST,
  SELL_ORDER_ADDRESS_SUCCESS,
  SELL_ORDER_ADDRESS_FAIL,
} from "../constants/sellOrderConstants";
// import { logout } from "./userActions";
import { pageAnimation } from './../Animation';
import { payOrder } from './orderActions';

export const createSellOrder = (order, cb) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELL_ORDER_CREATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    // const { data } = await axios.post(`/api/sell-orders`, order, config);

    dispatch({
      type: SELL_ORDER_CREATE_SUCCESS,
      payload: order,
    });
    cb("/sell/shipping");
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: SELL_ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const saveSellShippingAddress = (shipping) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELL_ORDER_ADDRESS_REQUEST,
    });

    const {
      sellOrder,
      userLogin: { userInfo },
    } = getState();
    let payload = sellOrder;
    payload["shippingAddress"] = shipping;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/sell-orders`, payload, config);

    dispatch({
      type: SELL_ORDER_ADDRESS_SUCCESS,
      payload: shipping,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SELL_ORDER_ADDRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const getOrderDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_DETAILS_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(`/api/orders/${id}`, config);

//     dispatch({
//       type: ORDER_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ORDER_DETAILS_FAIL,
//       payload: message,
//     });
//   }
// };

// export const payOrder =
//   (orderId, paymentResult) => async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: ORDER_PAY_REQUEST,
//       });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };

//       const { data } = await axios.put(
//         `/api/orders/${orderId}/pay`,
//         paymentResult,
//         config
//       );

//       dispatch({
//         type: ORDER_PAY_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       if (message === "Not authorized, token failed") {
//         dispatch(logout());
//       }
//       dispatch({
//         type: ORDER_PAY_FAIL,
//         payload: message,
//       });
//     }
//   };

// export const deliverOrder = (order) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_DELIVER_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.put(
//       `/api/orders/${order._id}/deliver`,
//       {},
//       config
//     );

//     dispatch({
//       type: ORDER_DELIVER_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ORDER_DELIVER_FAIL,
//       payload: message,
//     });
//   }
// };

// export const listMyOrders = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_LIST_MY_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(`/api/orders/myorders`, config);

//     dispatch({
//       type: ORDER_LIST_MY_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ORDER_LIST_MY_FAIL,
//       payload: message,
//     });
//   }
// };

// export const listOrders = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: ORDER_LIST_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(`/api/orders`, config);

//     dispatch({
//       type: ORDER_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: ORDER_LIST_FAIL,
//       payload: message,
//     });
//   }
// };
