import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import HomeSlider from './HomeSlider';
import MaterialCat from "./Home/MaterialCat";
import ShopCategory from "./Home/ShopCategory";
import KitchenWorktop from "./Home/KitchenWorktop";
import ImportCollection from "./Home/ImportCollection";
import TabCategory from "./Home/TabCategory";
import MaterialCat2 from "./Home/MaterialCat2";
import FeatureProduct from "./Home/FeatureProduct";
import ImportCollection2 from "./Home/ImportCollection2";
import CommercialProject from "./Home/CommercialProject";
import Blog from "./Blog/Blog";
import HomeAbout from "./Home/HomeAbout";
import Footer from './Main/Footer';

function Home() {
  return (
    <section>
      <Header />
      <HomeSlider />
      <MaterialCat />
      <ShopCategory />
      <KitchenWorktop />
      <ImportCollection />
      <TabCategory />
      <MaterialCat2 />
      <FeatureProduct />
      <ImportCollection2 />
      <CommercialProject />
      <Blog />
      <HomeAbout />
      <Footer />
    </section>
  );
}
export default Home;