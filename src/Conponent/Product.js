// Product.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from '../redux/actions';
import '../Styled/Product.css';

const Product = () => {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <section className="it-services">
      <div className="container1">
        <h2>Our IT Services</h2>
        <div className="services-list1">
          {products.map((product, index) => (
            <div className="service1" key={index}>
              <img src={product.imageUrl} alt={product.title} />
              <div className="service-info1">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
