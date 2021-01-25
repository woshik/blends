import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';
import styles from './product-item.module.css';

const ProductItem = ({product}) => {
    const { circle, box, title } = styles;
    return (
        <div className={box}>
            <div className={circle}>
                <p className={title}>{product.name}</p>
                <img className={styles.productImg}
                     src={`img/${product.id}.png`} alt=""/>
            </div>
            <h3>{formatNumber(product.price)}</h3>
                <Link to={`/product/${product.id}`}>Details</Link>
        </div>
     );
}

export default ProductItem;
