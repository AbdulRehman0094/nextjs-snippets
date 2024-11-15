import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next Js",
    template: " %s | About NEXT JS",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Nested Layout</h1>
      {children}
    </>
  );
}
