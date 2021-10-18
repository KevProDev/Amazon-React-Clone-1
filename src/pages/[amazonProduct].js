import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

export default function amazonProduct({ amazonProduct }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <Header />
      <div className="grid px-8 py-12 sm:grid-rows-3 mt-4 md:grid-cols-5 max-w-screen-xl m-auto space-y-3">
        {/* Image Left */}
        <div className="col-span-2 flex items-center justify-center md:justify-end">
          <Image
            src={amazonProduct.image}
            height={300}
            width={300}
            objectFit="contain"
          />
        </div>

        {/* Info Middle */}
        <div className="col-span-2 flex flex-col space-y-3">
          <div>
            <h1 className="text-xl sm:text-2xl text-black">
              {amazonProduct.title}
            </h1>
            <p className="text-gray-700">{amazonProduct.category}</p>
          </div>
          <p>{amazonProduct.description}</p>
          <p>
            <span className="font-bold">Rating: </span>
          </p>
          <p>
            <span className="font-bold">Price: </span>
            {amazonProduct.price}
          </p>
          <button className="button"> Add to Basket</button>
        </div>

        {/* Order option Right */}
        {/* <div className="border-rounded border-2 col-span-2 ">
          <h3>Order Options</h3>
        </div> */}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://fakestoreapi.com/products/${params.amazonProduct}`
  ).then((res) => res.json());

  return {
    props: {
      amazonProduct: results,
    },
  };
}

export async function getStaticPaths() {
  const amazonProducts = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    paths: amazonProducts.map((product) => {
      return {
        params: {
          amazonProduct: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
}
