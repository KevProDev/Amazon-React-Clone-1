import { useCallback, useRef } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  ShoppingIcon,
} from "@heroicons/react/outline";
import LiveSearch from "./LiveSearch";

function Header({ products }) {
  console.log("App Render Starts");
  const [search, setSearch] = useState("");
  const [records, setRecord] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const water = search;

  const loadProductDetail = () => {
    setRecord(products);
    // setRecord((products) => [...products, products]);
    console.log("setting products into SetRecord");
    console.log(products);
  };

  useEffect(() => {
    console.log("use Effect started to set Product into Records");
    loadProductDetail();
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      console.log("useEffect for search is");
      console.log(search);
      setFilterProducts([]);
      setFilterProducts(
        products.filter((product) => {
          return product.title.toLowerCase().includes(search.toLowerCase());
        })
      );
    } else {
      setFilterProducts([]);
    }
  }, [search]);

  return (
    <header>
      {console.log("HTML started")}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
            id="search"
            placeholder="Enter What You're Looking For"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* RIGHT  */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Kevin Johnson</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black text-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div>{search}</div>
      <div>
        {/* {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))} */}

        {filterProducts.map((product, index) => (
          <p className="text-xs text-gray-500" key={index}>
            {product.title}
          </p>
        ))}
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All{" "}
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Groceries</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
