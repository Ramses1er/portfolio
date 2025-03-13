"use client";
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
        <div className="bg-gray-100">
          {/* premier element texttuel qui vient apres le menu */}
          <div className="text-5xl font-semibold pt-40 pl-15 pb-20">
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
          <div className="flex flex-col bg-yellow-400 p-16">
            <div className="font-semibold text-5xl">– New Arrivals</div>
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
                  <button className="border-2 border-black p-2 w-20">
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
                  <button className="border-2 border-black p-2 w-20">
                    Buy set
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*fin de la div contenant les deux images avec un fond un peu rouge claire */}

          {/* div contenant le text "Circles & Spheres Collection" avec trois images a droite */}
          <div className="flex">
            <div className="flex flex-col gap-4 p-8">
              <div>
                <div className="font-semibold text-2xl">
                  Circles & Spheres Collection
                </div>
              </div>
              <div>
                Fun and spherical candles, vases, and lamps. Shop Collection
              </div>
            </div>
            <div className="flex pt-20 gap-4 items-center">
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={100}
                    src="/my-tp-img/Stocksy_comp_2612654+1.jpg"
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
                    height={150}
                    src="/my-tp-img/Stocksy_comp_3648708+1.jpg"
                  />
                </div>
                <div>OCircular Candle</div>
                <div>$15.00</div>
              </div>
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={500}
                    src="/my-tp-img/Stocksy_comp_3436732+1.jpg"
                  />
                </div>
                <div>Crystal Ball Sculpture</div>
                <div>$100.00</div>
              </div>
            </div>
          </div>
          {/*fin de la div contenant le text "Circles & Spheres Collection" avec trois images a droite */}

          {/* div contenant le text "Found Florals Collection" avec trois images a droite */}
          <div className="flex bg-gray-600">
            <div className="flex flex-col gap-4 p-8">
              <div>
                <div className="font-semibold text-2xl">
                  – Found Florals Collection
                </div>
              </div>
              <div>
                Antique vases, and odd shaped containers for flowers or
                trinkets. Shop Collection
              </div>
            </div>
            <div className="flex pt-20 gap-4 items-center">
              <div className="h-full">
                <div>
                  <Image
                    alt=""
                    width={400}
                    height={100}
                    src="/my-tp-img/Stocksy_comp_2556911+2.jpg"
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
                    height={150}
                    src="/my-tp-img/Stocksy_comp_2556907+2.jpg"
                  />
                </div>
                <div>OCircular Candle</div>
                <div>$15.00</div>
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
                <div>Crystal Ball Sculpture</div>
                <div>$100.00</div>
              </div>
            </div>
          </div>
          {/* fin de la div contenant le text "Found Florals Collection" avec trois images a droite */}

          {/* div contenant les 4 images circulaire */}
          <div>
            {/* div contenant les deux premieres images */}
            <div className="flex items-center gap-100 justify-center">
              <div className="flex flex-col">
                <div>
                  <Image
                    className="rounded-full w-100 h-100"
                    alt=""
                    width={300}
                    height={300}
                    src="/my-tp-img/Stocksy_comp_3816204.jpg"
                  />
                </div>
                <div>
                  <button>Shop Lighting</button>
                </div>
              </div>
              <div>
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
                  <button>Shop Lighting</button>
                </div>
              </div>
            </div>
            {/*fin de la div contenant les deux premieres images */}

            {/* div contenant les deux dernieres images */}
            <div className="flex items-center gap-100 justify-center">
              <div className="flex flex-col">
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
                  <button>Shop Vases</button>
                </div>
              </div>
              <div>
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
                  <button>Shop Sculptures</button>
                </div>
              </div>
            </div>
            {/*fin de la div contenant les deux dernieres images */}
          </div>
          {/*fin de la div contenant les 4 images circulaire */}

          {/* div contenant les 5 dernieres images */}
          <div className="flex gap-2 justify-between p-8">
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
                <div className="mt-25">Made with Squarespace</div>
              </div>
              <div className="font-bold flex flex-col gap-5 underline ml-50">
                <div>About</div>
                <div>Contact</div>
                <div>FAQs</div>
                <div>Shipping & Returns</div>
              </div>
            </div>
            <div className="flex w-100 flex-col gap-10 border-t-1 border-black">
              <div className="font-bold text-xl pt-5">Get our Newsletter</div>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border-[1px] border-gray-400 bg-white p-6"
                  placeholder="Email adresse"
                />
              </div>
              <div>
                <button className="p-6 border-2 border-black w-40">
                  Suscribe{" "}
                </button>
              </div>
            </div>
          </div>
          {/* div contenant des derniers elements sur l'interface */}

          {/* div contenant le dernier element a droit en bas fixer qui ne bouge pas au defilement vertical */}
          <div className="relative bg-black text-white mt-20">
            <div>logo</div>
            <div>
              <div>Create a site like this</div>
              <div className="text-[10px]">free trial, instant access.</div>
            </div>
          </div>
          {/* fin de la div contenant le dernier element a droit en bas fixer qui ne bouge pas au defilement vertical */}
        </div>
      </>
    );
  }
}
