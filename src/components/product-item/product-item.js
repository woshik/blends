import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';
import styles from './product-item.module.css';

const ProductItem = ({product}) => {
    return ( 
        <div>
            <img className={styles.productImg}
            src={`img/${product.id}.png`} alt=""/>
            <p>{product.name}</p>
            <h3>{formatNumber(product.price)}</h3>
                <Link to={`/product/${product.id}`}>Details</Link>  
        </div>
     );
}
 
export default ProductItem;