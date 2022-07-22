import React, { useState } from "react";
import { Announcements } from "../../components/Announcements";
import { Categories } from "../../components/Categories";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Products } from "../../components/Products";
import { Slider } from "../../components/Slider";

export const Home = () => {
  const [cart, setCart] = useState(0);

  const IncrementCart = () => {
    setCart(cart + 1);
  };

  return (
    <div>
      <Announcements />
      <Navbar cart={cart} />
      <Slider />
      <Categories />
      <Products IncrementCart={IncrementCart} />
      <Footer />
    </div>
  );
};
