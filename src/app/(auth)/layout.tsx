"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Forget Password",
      href: "/forget-password",
    },
  ];

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link key={link.href} href={link.href} className={isActive ? "font-bold underline" : "bg-red-50"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
