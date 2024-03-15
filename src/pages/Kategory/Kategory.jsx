import React, { useEffect } from 'react';
import { useMainContext } from '../../context/ProductContext';

const Kategory = () => {
    const {product,readProduct,removeData} = useMainContext()

    useEffect(()=>{
        readProduct()
    },[])
    return (
        <div id="kategory">
            <div className="container">
                <div className="kategory">
                <div className='main'>
            <h4>Категории</h4>
            <div className="main2">
               <div className="mainBlock">
               <img src="https://penfox.ru/wp-content/uploads/2019/04/Idei-dlya-detektiva.png" alt="" />
                <h3>Детектив</h3>
               </div>
               <div className="mainBlock">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HwtifoYTi1qu6d50tQ8yVuhnIvEtVEzYSULCkHttjg&s" alt="" />
                <h3>Фантастика</h3>
               </div>
               <div className="mainBlock">
               <img src="https://i.ytimg.com/vi/Dlx1rrD_kMU/maxresdefault.jpg" alt="" />
                <h3>Приключения</h3>
               </div>
               <div className="mainBlock">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHd0t-ChHP36eKK_es8Z1LbN8B6pdGW5cTqvpx7qZig&s" alt="" />
              <h3>Научная</h3>
               </div>   
            </div>
        </div>
        <div className="sorting">
            <div className='rr'><h2>Возможно, Вам понравится</h2></div>
          <div className='tt'> 
           <select className='select' name="" id="">
          <option value="">Сортировка</option>
          <option value="">Сортировка</option>
          </select>
            </div>
        </div>
        <div className="card">
            {
                product.map((el)=>(
                    <div className='cardBox'>
                        <img src={el.img} alt="" />
                        <h1>{el.name}</h1>
                        <p>{el.price}$</p>
                        <button onClick={()=>removeData(el.id)}>delete</button>
                    </div>
                ))
            }
        </div>
         </div>
            </div>
        </div>
    );
};

export default Kategory