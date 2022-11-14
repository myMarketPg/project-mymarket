/*
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Buyer, Product, StoreState } from "../../Redux/Interfaces";
import { getAllBuyers } from "../../Redux/action/buyersActions";
import { getAllProducts } from "../../Redux/action/productsActions";

interface PruebaProps {
  buyer: Buyer[];
  product: Product[];
  getAllBuyers: () => void;
  getAllProducts: () => void;
}

function Componente({ getAllBuyers, getAllProducts }: PruebaProps) {
  useEffect(() => {
    getAllBuyers();
    getAllProducts();
  }, []);

  return <div>hola</div>;
}

const mapStateToProps = (
  state: StoreState
): { buyers: Buyer[]; products: Product[] } => {
  return {
    buyers: state.buyers,
    products: state.products,
  };
};

export default connect(mapStateToProps, { getAllBuyers, getAllProducts })(
  Componente
);
*/
