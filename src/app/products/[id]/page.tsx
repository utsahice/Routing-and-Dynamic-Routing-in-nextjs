import Link from "next/link";
import { products } from "@/app/lib/products";

type Props = {
  params: { id: string };
};

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="mt-2">
        <strong>Price:</strong> ${product.price}
      </p>
      <p className="mt-2">{product.description}</p>
      <Link href="/" className="mt-4 inline-block text-blue-500">
        Back to Products
      </Link>
    </div>
  );
}
