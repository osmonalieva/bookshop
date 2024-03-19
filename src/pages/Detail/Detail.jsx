import React, { useEffect, useState } from 'react'
import { useMainContext } from '../../context/ProductContext'
import { json, useParams } from 'react-router-dom'
import './Detail.css'

const Detail = () => {
	const { product } = useMainContext()
	const [oneProduct] = useState([])


	const { id } = useParams()
	const [count, setCount] = useState(1)



	const countPrice = oneProduct.price * count

	if (count < 1) {
		setCount(1)
	}

	return (
		<div>
			<section id='detaile'>
				<div className='container'>
					<h3 className='detaileH3'>
						Главная / Психология / Montana Oversize T-shirt AFRRSJDHSVOUYVE{' '}
					</h3>
					<div className='detaile'>
						<img src={oneProduct.img} alt='' />
						<div className='detaileInformations'>
							<h3>{oneProduct.name}</h3>
							<h4>{countPrice} сом </h4>
							<h5>Жанр: </h5>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								<button
									style={{
										width: '40px',
										height: '20px',
										outline: 'none'
									}}
									onClick={() => setCount(count => count - 1)}
								>
									-
								</button>
								<h4>{count}</h4>
								<button
									style={{
										width: '40px',
										height: '20px',
										outline: 'none'
									}}
									onClick={() => setCount(count => count + 1)}
								>
									+
								</button>
							</div>
							<h3 cl>Описание</h3>
							<p>{oneProduct.descr}</p>
							<button className='baskets'
								onClick={() => {
								
								}}
							>
								Добавить в корзину
							</button>{' '}
							<br />
							<button className='now'>Купить сейчас</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Detail
