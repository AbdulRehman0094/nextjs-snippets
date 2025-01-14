import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/docs"}>Docs</Link>
      </div>
    </>
  );
}
