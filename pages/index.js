import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components/index";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)}
      {console.log(products)} */}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of different variations</p>
      </div>
      <div className="products-container">
        {products?.map((prod) => (
          <Product key={prod._id} product={prod} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
