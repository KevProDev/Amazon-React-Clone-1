import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1> {id}</h1>
    </div>
  );
}

export default ProductPage;
