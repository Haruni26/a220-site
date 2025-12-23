import Image from "next/image";
import Logo from "../../public/images/logo.svg";

export default function Header() {
  return (
    <div className="bg-gray-400/40 w-full p-6">
      <Image src={Logo} alt="Pan Am Logo" width={190} priority />
    </div>
  );
}
