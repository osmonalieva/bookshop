import React, { useEffect, useState } from 'react'
import { useMainContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

const Kategory = () => {
	const { product, readProduct, removeData, setProduct } = useMainContext()
	const [more, setMore] = useState(5)

	let res = product.splice(0, more)

	useEffect(() => {
		readProduct()
	}, [])

	const navigate = useNavigate()
	return (
		<div id='kategory'>
			<div className='container'>
				<div className='kategory'>
					<div className='main'>
						<h4>Категории</h4>
						<div className='main2'>
							<div className='mainBlock'>
								<img
									src='https://penfox.ru/wp-content/uploads/2019/04/Idei-dlya-detektiva.png'
									alt=''
								/>
								<h3>Детектив</h3>
							</div>
							<div className='mainBlock'>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HwtifoYTi1qu6d50tQ8yVuhnIvEtVEzYSULCkHttjg&s'
									alt=''
								/>
								<h3>Фантастика</h3>
							</div>
							<div className='mainBlock'>
								<img
									src='https://i.ytimg.com/vi/Dlx1rrD_kMU/maxresdefault.jpg'
									alt=''
								/>
								<h3>Приключения</h3>
							</div>
							<div className='mainBlock'>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHd0t-ChHP36eKK_es8Z1LbN8B6pdGW5cTqvpx7qZig&s'
									alt=''
								/>
								<h3>Научная</h3>
							</div>
						</div>
					</div>
					<div className='sorting'>
						<div className='rr'>
							<h2>Возможно, Вам понравится</h2>
						</div>
						<div className='tt'>
							<select className='select' name='' id=''>
								<option value=''>Сортировка</option>
								<option value=''>Сортировка</option>
							</select>
						</div>
					</div>
					<div className='card'>
						{res.map((el, index) => (
							<div key={index} className='cardBox'>
								<div className='imgs'>
									<img src={el.img} alt='' />
									<div className='cardBLock'>
										<div>
											<h1>{el.name}</h1>
											<p>{el.price}сом</p>
										</div>
										<div
											style={{
												display: 'flex',
												alignItems: ' center',
												gap: '0px'
											}}
											className='btnss'
										>
											<button onClick={() => removeData(el.id)}>
												<MdDelete />
											</button>

											<button onClick={() => navigate(`/detail/${el.id}`)}>
												<FaEdit />
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<button
						className='btnAdd'
						onClick={() => {
							setMore(more + 5)
						}}
					>
						add
					</button>
				</div>
			</div>
		</div>
	)
}

export default Kategory
