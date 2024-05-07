import Image from "next/image";
import Dates from "./components/Dates";
import Building from "./components/Building";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <main className="pt-[20px] px-[20px]">
      <Dates />
      <Divider />
      <div className="flex space-x-1">
        <div className="border border-red-300 flex-1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="border border-red-300 flex-1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="border border-red-300 flex-1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>

      <Building />
    </main>
  );
}
