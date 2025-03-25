import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from "next/link";

export default function Menu() {
  return (
    // definition du menu en haut
    <div className="fixed bg-[#FAFAFA] top-0 left-0 flex w-full justify-between p-6 border-b-2 border-black">
      <div className="font-bold text-2xl">
        <Link href="/">granger vintage</Link>
      </div>
      <div className="flex font-bold gap-10">
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
          <Link href="">
            <FaInstagram />
          </Link>
        </div>
        <div>
          <Link href="">
            <FaFacebookF />
          </Link>
        </div>
        <div>
          <Link href="">
            <TiSocialTwitter />
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <Link href="">
              <PiShoppingCartSimpleFill />
            </Link>
          </div>
          <div> 0</div>
        </div>
      </div>
    </div>
    // fin du menu
  );
}
