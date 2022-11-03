import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSellDetails } from "../actions/sellOrderActions";
import SellOrderScreenView from "./SellOrderScreenView";

const SellOrderScreen = () => {
  const dispatch = useDispatch();
  // const { allSellOrders } = useSelector((state) => state.allSellOrder);
  useEffect(() => {
    dispatch(getSellDetails());
  }, [dispatch]);

  return (
    <>
      <SellOrderScreenView />
    </>
  );
};

export default SellOrderScreen;
