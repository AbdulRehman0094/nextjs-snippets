"use client";
import { useRouter } from "next/navigation";
export default function Register() {
  const router = useRouter();
  const clickHandler = () => {
    console.log("Clicking Register");
    router.replace("/");
  };
  return (
    <button className="flex bg-blue-500 p-4 rounded-2xl text-white" onClick={clickHandler}>
      Register
    </button>
  );
}
