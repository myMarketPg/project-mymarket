import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProductDetail} from '../../Redux/actions';


const ProductDetail = (props) => {

    const date = useSelector((state) => state.productDetail);
    console.log('date-->', date);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetail(props.match.params.id))
    }, [dispatch, props.match.params.id]);

  return (
    <div>
        <h1>{date.name}</h1>
    </div>
  )
}

export default ProductDetail