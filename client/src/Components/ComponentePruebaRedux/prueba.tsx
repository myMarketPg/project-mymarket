import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../Redux/index";

export default function Componente() {
  const dispatch = useDispatch();
  const { getAllBuyers } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.dashboardSeller);

  useEffect(() => dispatch(getAllBuyers()), [dispatch, getAllBuyers]);

  return (
    <>
      <h1>Prueba</h1>
      <h2>{state}</h2>
    </>
  );
}
