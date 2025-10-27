import Image from "next/image";
import Link from "next/link";
import { products } from "./lib/products";
export default function Home() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <Link href={`/products/${product.id}`}>
              <strong>{product.title}</strong> - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
