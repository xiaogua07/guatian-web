import Image from "next/image";
import Dates from "./components/Dates";
import Building from "./components/Building";

export default function Home() {
  return (
    <main className="pt-[20px] pl-[20px]">
      <Dates />
      <Building />
    </main>
  );
}
