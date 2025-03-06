import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

    //   </main>
    // </div>

    <>
      {/* definition du menu en haut  */}
      <div className="fixed flex w-full justify-between p-8 border-b-2 mb-500 border-black">
        <div className="font-bold text-2xl">granger vintage</div>
        <div className="flex font-bold gap-5">
          <div>Shop</div>
          <div>About</div>
          <div>Contact</div>
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
      {/* fin du menu */}
    </>
  );
}
