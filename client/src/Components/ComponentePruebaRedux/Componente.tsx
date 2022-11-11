import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Buyer, StoreState } from "../../Redux/Interfaces";
import { getAllBuyers } from "../../Redux/action/creators";

interface PruebaProps {
  buyer: Buyer[];
  getAllBuyers(): any;
}

function Componente(props: PruebaProps) {
  useEffect(() => {
    props.getAllBuyers();
  }, [props]);

  return <div>hola</div>;
}

const mapStateToProps = (state: StoreState): { buyers: Buyer[] } => {
  return {
    buyers: state.buyers,
  };
};

export default connect(mapStateToProps, { getAllBuyers })(Componente);
