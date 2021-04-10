// import React from 'react'
// import './Home.css'
// import Product from './Product'

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>

//     )
// }

// export default Home

import React,{useEffect} from 'react'
import './Home.css'
import Product from './Product'
import {listProduct} from './Reducers/actions/productActions'
import { useSelector,useDispatch } from 'react-redux'

function Home() {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const {loading,products,error}=productList
    // console.log("Home wala prods",products);


    return (
        <div className="home">  

           

            <div className="home_container">
                {/* 1.<img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"/> */}
                {loading?<h2>Loading...</h2>
                        :error?<h2>{error}</h2>
                        :  <div className="home__row">
                        {
                            products.map((i)=>(
                                <Product 
                                    id={i._id}
                                    title={i.description}
                                    price={i.price}
                                    rating={i.Avgrating}
                                    image={i.image}
                                />
                                // console.log("i=",i.description,i.price,i.Avgrating,i.image);
                                ))
                        }
                          </div>}
            </div>    

        </div>
    )
}

export default Home
