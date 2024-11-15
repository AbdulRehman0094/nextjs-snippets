"use client";

export default function ReviewDetails({ params }: { params: { productId: string; reviewId: string } }) {
  if (params.productId === "1") throw new Error("Error");

  return (
    <h1>
      Review {params.reviewId} details of Product {params.productId}
    </h1>
  );
}
