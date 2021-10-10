import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItem } from "../slices/productPage";

function Productpage() {
  // add a onclick on the search item
  // create a useState to store that product title
  // use that product to search list of products
  // pass the product data to the this page
  // enter that data into the respected spots

  const item = useSelector(selectItem);

  console.log("product page loaded and started");
  console.log(item);
  console.log(item.id);

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="">Left Col</div>

        <div className="flex flex-grow ">
          <h1>{item.title}</h1>
          <p>{item.rating}</p>
          <p>{item.isPrime}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>

        <div className="">Right Col</div>
      </main>
    </div>
  );
}

export default Productpage;
