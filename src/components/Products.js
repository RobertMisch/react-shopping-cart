import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext'

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext); 
	//this is a really cool example of destructuring being lit

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
