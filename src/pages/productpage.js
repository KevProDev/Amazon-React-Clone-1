import React from "react";
import Header from "../components/Header";

function Productpage() {
  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="">Left Col</div>

        <div className="">
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
