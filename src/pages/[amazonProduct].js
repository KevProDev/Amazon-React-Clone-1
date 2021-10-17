import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function amazonProduct({ amazonProduct }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div className="bg-blue-300 grid px-8 py-12 sm:grid-rows-3 md:grid-cols-5 max-w-screen-xl m-auto">
      {/* Image Left */}
      <div className="col-span-2">
        <Image
          src={amazonProduct.image}
          height={200}
          width={200}
          objectFit="contain"
        />
      </div>

      {/* Info Middle */}
      <div className="col-span-2 space-y-3">
        <h1 className="text-xl sm:text-2xl text-gray-700 mb-4">
          {amazonProduct.title}
        </h1>
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
      <div>Order Options</div>
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
