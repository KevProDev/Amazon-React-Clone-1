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

        <div className="">
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <h1>{item.description}</h1>
          <span>Department</span>
          <h1>
            Samsung CF390 Series 27 inch FHD 1920x1080 Curved Desktop Monitor
            for Business, HDMI, VGA, VESA mountable, 3-Year Warranty, TAA
            (C27F390FHN), Black
          </h1>
          <p>Rating</p>
          <p>Company</p>
          <p>In-Stock</p>
        </div>

        <div className="">Right Col</div>
      </main>
    </div>
  );
}

export default Productpage;
