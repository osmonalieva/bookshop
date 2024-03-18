import React, { useEffect, useState } from 'react';

const Basket = () => {
	const [order,serOrder] = useState([])
	function getOrder() {
		let local = JSON.parse(localStorage.getItem('order')) || []
		serOrder(local)
	}
	useEffect(()=>{
		getOrder()
	},[])
	return (
		<div>
			{order.map((el)=>(
				<div>
					<img src={el.img} alt="" />
				</div>
			))}
		</div>
	);
};

export default Basket;
