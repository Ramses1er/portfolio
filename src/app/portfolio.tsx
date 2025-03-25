
"use client";
import Link from "next/link"
import Image from "next/image";

export default function Portfolio() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

    //   </main>
    // </div>

    <Portfolio />
    // <Responsive />
  );

  function Portfolio() {
    return (
      <>
        {/* container general de l'application */}
        <div className="bg-[#FAFAFA]">
          {/* premier element texttuel qui vient apres le menu */}
          <div className="text-5xl font-bold pt-40 pl-7 pb-20">
            Midcentury Modern, <br />
            Vintage, & Retro Home <br />
            Decor
          </div>
          {/* fin de du premier element textuel qui vient apres le menu */}

          {/* div contenant les deux premieres images  */}
          <div className="flex p-8 justify-between">
            <div>
              <Image
                src="/my-tp-img/Stocksy_comp_2081304+1.jpg"
                alt=""
                width={500}
                height={300}
              />
            </div>
            <div className="flex flex-col gap-2 pt-10 mt-18">
              <div className="font-semibold text-2xl">
                Based out of Austin, TX.
              </div>
              <div>
                <Image
                  src="/my-tp-img/Mask+Group.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* fin de la div contenant les deux premieres images  */}

          {/* div contenant : est 2018 et l'autre text a droite */}
          <div className="flex justify-between p-6 items-center">
            <div>
              <div className="font-semibold text-4xl">est.</div>
              <div className="text-9xl font-semibold">2018</div>
            </div>
            <div className="p-30">
              Originally established in March 2018 out of <br /> a storage unit,
              our home decor store was <br /> born from a love of all things
              mid-century <br /> modern, vintage, and retro.
            </div>
          </div>
          {/* div contenant : est 2018 et l'autre text a droite */}

          {/* div contenant les deux images avec un fond un peu rouge claire */}
          <div className="flex flex-col bg-[#DF976F] p-16">
            <div className="font-bold text-5xl">– New Arrivals</div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-4 pt-30">
                <div>
                  <Image
                    alt=""
                    src="/my-tp-img/Stocksy_comp_3648714+1.jpg"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="font-semibold text-xl">
                  Azul Candles (set of 2)
                </div>
                <div>
                  <button className="border-2 border-black p-2 w-20 cursor-pointer hover:bg-black hover:text-white">
                    Buy set
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <Image
                    alt=""
                    src="/my-tp-img/Stocksy_comp_3648708+1.jpg"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="font-semibold text-xl">
                  Azul Candles (set of 2)
                </div>
                <div>
                  <button className="border-2 border-black p-2 w-20 cursor-pointer hover:bg-black hover:text-white">
                    Buy set
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*fin de la div contenant les deux images avec un fond un peu rouge claire */}

          {/* div contenant le text "Circles & Spheres Collection" avec trois images a droite */}
          <div className="flex p-5 mt-10">
            <div className="flex flex-col gap-4 p-8">
              <div>
                <div className="font-bold text-2xl">
                  Circles & Spheres Collection
                </div>
              </div>
              <div>
                Fun and spherical candles, vases, and lamps. Shop Collection
              </div>
            </div>
            <div className="flex pt-20 gap-4 items-center self-end">
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={100}
                    src="/my-tp-img/Stocksy_comp_2612654+1.jpg"
                    className="h-90 w-60"
                  />
                </div>
                <div>Orb Light</div>
                <div>$80.00</div>
              </div>
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={100}
                    src="/my-tp-img/Stocksy_comp_3648708+1.jpg"
                    className="h-90 w-60"
                  />
                </div>
                <div>OCircular Candle</div>
                <div>$15.00</div>
              </div>
              <div className="h-full">
                <div className="">
                  <Image
                    alt=""
                    width={400}
                    height={100}
                    src="/my-tp-img/Stocksy_comp_3436732+1.jpg"
                    className="h-90 w-60"
                  />
                </div>
                <div>Crystal Ball Sculpture</div>
                <div>$100.00</div>
              </div>
            </div>
          </div>
          {/*fin de la div contenant le text "Circles & Spheres Collection" avec trois images a droite */}

          {/* div contenant le text "Found Florals Collection" avec trois images a droite */}
          <div className="flex bg-[#586261] mt-30 pt-10 pb-40">
            <div className="flex flex-col gap-4 p-8">
              <div>
                <div className="font-semibold text-[#FAFAFA] text-2xl">
                  – Found Florals Collection
                </div>
              </div>
              <div className="text-[#FAFAFA]">
                Antique vases, and odd shaped containers for flowers or
                trinkets. <br />
                <Link href="/shop" className="underline text-[#D9D8BD]">
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="flex pt-20 gap-4 items-center w-200">
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={100}
                    src="/my-tp-img/Stocksy_comp_2556911+2.jpg"
                  />
                </div>
                <div className="text-white">Orb Light</div>
                <div className="text-white">$80.00</div>
              </div>
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={150}
                    src="/my-tp-img/Stocksy_comp_2556907+2.jpg"
                  />
                </div>
                <div className="text-white">OCircular Candle</div>
                <div className="text-white">$15.00</div>
              </div>
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={500}
                    src="/my-tp-img/Stocksy_comp_2569263+2.jpg"
                  />
                </div>
                <div className="text-white">Crystal Ball Sculpture</div>
                <div className="text-white">$100.00</div>
              </div>
            </div>
          </div>
          {/* fin de la div contenant le text "Found Florals Collection" avec trois images a droite */}

          {/* div contenant les 4 images circulaire */}
          <div className="p-10 mt-30">
            {/* div contenant les deux premieres images */}
            <div className="flex items-center gap-100 justify-center">
              <div className="flex flex-col justify-center items-center gap-10">
                <div>
                  <Image
                    className="rounded-full w-100 h-100"
                    alt=""
                    width={350}
                    height={300}
                    src="/my-tp-img/Stocksy_comp_3816204.jpg"
                  />
                </div>
                <div>
                  <button className="cursor-pointer border-2 p-2 w-40 font-bold hover:text-white hover:bg-black">
                    <Link href="/shop">Shop Lighting</Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-10">
                <div>
                  <Image
                    className="rounded-full w-100 h-100"
                    alt=""
                    width={300}
                    height={50}
                    src="/my-tp-img/Stocksy_comp_3886539.jpg"
                  />
                </div>
                <div>
                  <button className="cursor-pointer border-2 p-2 w-40 font-bold hover:text-white hover:bg-black">
                    <Link href="/shop">Shop Lighting</Link>
                  </button>
                </div>
              </div>
            </div>
            {/*fin de la div contenant les deux premieres images */}

            {/* div contenant les deux dernieres images */}
            <div className="flex items-center gap-100 justify-center mt-20">
              <div className="flex flex-col justify-center items-center gap-10">
                <div>
                  <Image
                    className="rounded-full w-100 h-100"
                    alt=""
                    width={300}
                    height={300}
                    src="/my-tp-img/Stocksy_comp_3291435.jpg"
                  />
                </div>

                <div>
                  <button className="cursor-pointer border-2 p-2 w-40 font-bold hover:text-white hover:bg-black">
                    <Link href="/shop">Shop Vases</Link>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-10">
                <div>
                  <Image
                    className="rounded-full w-100 h-100"
                    alt=""
                    width={300}
                    height={50}
                    src="/my-tp-img/Stocksy_comp_3436729.jpg"
                  />
                </div>
                <div>
                  <button className="cursor-pointer border-2 p-2 w-40 font-bold hover:text-white hover:bg-black">
                    <Link href="/shop">Shop Sculptures</Link>
                  </button>
                </div>
              </div>
            </div>
            {/*fin de la div contenant les deux dernieres images */}
          </div>
          {/*fin de la div contenant les 4 images circulaire */}

          {/* div contenant les 5 dernieres images */}
          <div className="flex gap-2 justify-between p-8 mt-30">
            <div>
              <Image
                src="/my-tp-img/Stocksy_comp_2569263+29.jpg"
                width={250}
                height={250}
                alt=""
              />
            </div>
            <div>
              <Image src="/my-tp-img/IG5.jpg" width={250} height={250} alt="" />
            </div>
            <div>
              <Image src="/my-tp-img/IG8.jpg" width={250} height={250} alt="" />
            </div>
            <div>
              <Image
                src="/my-tp-img/Stocksy_comp_2556907+29.jpg"
                width={250}
                height={250}
                alt=""
              />
            </div>
            <div>
              <Image
                src="/my-tp-img/Stocksy_comp_2612645+29.jpg"
                width={250}
                height={250}
                alt=""
              />
            </div>
          </div>
          {/* div contenant les 5 dernieres images */}

          {/* div contenant des derniers elements sur l'interface */}
          <div className="flex justify-between p-20">
            <div className="flex gap-10 justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-2xl">granger vintage</div>
                <div className="mt-25">
                  Made with{" "}
                  <Link href="" className="underline">
                    Squarespace
                  </Link>
                </div>
              </div>
              <div className="font-bold flex flex-col gap-5 underline ml-50">
                <div>
                  <Link href="/about">About</Link>
                </div>
                <div>
                  <Link href="/contact">Contact</Link>
                </div>
                <div>
                  <Link href="">FAQs</Link>
                </div>
                <div>
                  <Link href="">Shipping & Returns</Link>
                </div>
              </div>
            </div>
            <div className="flex w-100 flex-col gap-10 border-t-1 border-black">
              <div className="font-bold text-xl pt-5">Get our Newsletter</div>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border-[1px] border-gray-400 bg-white p-4 w-60"
                  placeholder="Email Adress"
                />
              </div>
              <div>
                <button className="p-6 border-2 border-black w-40 font-bold hover:text-white hover:bg-black cursor-pointer">
                  Suscribe
                </button>
              </div>
            </div>
          </div>
          {/* div contenant des derniers elements sur l'interface */}

          {/* div contenant le dernier element a droit en bas fixer qui ne bouge pas au defilement vertical */}
          <div className="fixed bg-black text-white bottom-2 right-2 p-4 flex gap-5 items-center cursor-pointer">
            <div>
              <Image width={25} height={25} alt="" src="/my-tp-img/logo-light.svg"/>
            </div>
            <div>
              <div>Create a site like this</div>
              <div className="text-[10px] font-thin">Free trial, instant access.</div>
            </div>
          </div>
          {/* fin de la div contenant le dernier element a droit en bas fixer qui ne bouge pas au defilement vertical */}
        </div>
      </>
    );
  }
}
