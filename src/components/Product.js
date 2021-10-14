import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { addToSinglePage } from "../slices/productPage";
import { useRouter } from "next/router";
import Link from "next/link";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    hasPrime,
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  const addToProductPage = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    console.log(product);
    dispatch(addToSinglePage(product));
  };

  const ProductPageSetter = () => {
    addToProductPage();
    router.push("/productpage");
  };
  console.log(product);
  // key={id} href="/[id]" as={`/${id}`}

  return (
    <Link key={id} href="/[id]" as={`/${id}`}>
      <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
          {category}
        </p>
        <Image src={image} height={200} width={200} objectFit="contain" />

        <h4 className="my-3">{title}</h4>

        <div className="flex">
          {
            // array creates an empty array of x number of items inside based of the rating. .fill() fill with nothing but prepare it for .map(). Use .map to insert the Star component //
          }
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
          <Currency quantity={price} currency="USD" />
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}

        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Basket
        </button>
      </div>
    </Link>
  );
}

export default Product;
