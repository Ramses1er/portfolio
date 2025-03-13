import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link";

export default function Menu() {
  return (
    // definition du menu en haut
    <div className="fixed bg-gray-100 top-0 left-0 flex w-full justify-between p-6 border-b-2 border-black">
      <div className="font-bold text-2xl">granger vintage</div>
      <div className="flex font-bold gap-5">
        <div>
          <Link href="/shop">Shop</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex items-center gap-10 text-xl font-bold">
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <TiSocialTwitter />
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <PiShoppingCartSimpleFill />
          </div>
          <div> 0</div>
        </div>
      </div>
    </div>
    // fin du menu
  );
}
