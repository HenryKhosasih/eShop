import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce-business.jpg?v=1616039633&width=1024" alt="home-img" className="home__image" />

        <div className="home__row">
          <Product id={123456} title="Fitbit Sense" price={448} rating={4} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/481373-Product-0-I-637340228871240584_540x540.jpg?v=1598390154"/>
          <Product id={123457} title="Samsung Galaxy S22 Ultra" price={2149} rating={5} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580969-Product-0-I-637783568560846965_540x540.jpg?v=1646282515"/>
        </div>

        <div className="home__row">
          <Product id={123458} title="Xbox Series S 512GB Console" price={479} rating={4} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/487922-Product-0-I-637405974137291019_540x540.jpg?v=1623188393"/>
          <Product id={123459} title="JBL Tune 660 Wireless Headphones" price={149} rating={4} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/533202-Product-0-I-637661719948714625_540x540.jpg?v=1630539269"/>
          <Product id={123460} title="Segway Ninebot Kickscooter F40A" price={799} rating={4} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/511377-Product-0-I-637630724902577349_540x540.jpg?v=1633911842"/>
        </div>

        <div className="home__row">
          <Product id={123461} title="Alienware M15 Gaming Laptop [RTX 3070 Ti]" rating={5} price={3799} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/567035-Product-0-I-637825171977510577_540x540.jpg?v=1646888434"/>
        </div>
      </div>

    </div>
    
  )
}

export default Home