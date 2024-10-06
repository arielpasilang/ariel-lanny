"use client";

import { useState } from "react";
import Image from "next/image";
import ProfilePicture from "./images/banner.png";
import Letter from "./images/letters.png";
import Button from "./components/button/index";
import OurStoryTop from "./images/top-section-bg.png";
import OurStoryText from "./images/our-story-text.png";
import Ariel from "./images/ariel.png";
import OurStoryPhoto from "./images/our-story-us.png";
import Lanny from "./images/lanny.png";
import OurStoryBottom from "./images/bot-section-bg.png";
import ArielLannyLetter from "./images/ariellannyletter.png";
import ChurchLocation from "./images/church-location.png";
import VenueLocation from "./images/reception-location.png";
import TheEntourage from "./images/the-entourage.png";
import principal from "./consts/principal";
import secondarySponsors from "./consts/secondary-sponsors";
import offerers from "./consts/offerers.js";
import Gcash from "./images/gcash.png";
import ThankYouText from "./images/thank-you.png";
import Modal from "./components/modal";

const ImageContainer = ({ image }) => {
  return (
    <Image
      style={{
        width: "265px",
        height: "auto",
      }}
      src={image}
      alt="Profile Picture"
      className="mx-auto"
    />
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copy, setCopy] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("09271293886");
    setCopy(true);
  };

  return (
    <div className="max-w-screen-sm mx-auto">
      {/* Header */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="bg-white mx-auto p-[15px] max-w-full text-center mb-[50px] relative">
        <div className="absolute left-0 right-0 h-96 w-full">
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            src={ProfilePicture}
            alt="Profile Picture"
          />
        </div>

        <div
          className="py-16 bg-gradient-to-b from-[#4A7EBA] to-[rgba(74,126,186,0)] mx-auto max-w-full relative "
          style={{ borderRadius: "40px 40px 0px 0px" }}
        >
          <p className="text-2xl text-white p-5 mb-3">
            “Like this tree that has weathered countless storms, I vow to stay
            as strong and steadfast as it stands.” ~Ariel
          </p>
          <Image src={Letter} width={380} className="mx-auto" />
        </div>
        <div className="pt-36 md:pt-[450px] mx-auto flex flex-col w-10/12 inline-grid gap-5">
          <div>
            <h2 className="text-primary mb-2">Save the Date</h2>
            <p className="text-primary">Saturday, October 12, 2024 | 2PM</p>
          </div>
          <Button
            style="primary"
            value="RSVP"
            link={false}
            href={null}
            newTab={undefined}
            onClick={openModal}
          />
          <Button
            style="secondary"
            value="Nuptial Details"
            link={true}
            href="#nuptial-details"
            newTab={false}
          />
        </div>
      </div>
      {/* Our Story */}

      <div className="relative w-full">
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={0}
          height={0}
          src={OurStoryTop} // Ensure the correct path to the image
          alt="Profile Picture"
        />
      </div>
      <div className="relative py-4 bg-cover bg-center text-center bg-no-repeat bg-[#147ACE]">
        {/* Background Image with Blend Mode */}
        <div
          className="bg-top bg-cover bg-no-repeat absolute left-0 right-0 pt-32"
          style={{
            backgroundImage: `url(/images/marsh-mallow.jpeg)`,
            backgroundBlendMode: "soft-light",
            width: "100%",
            height: "390px",

            // background:
            //   "linear-gradient(180deg, #147ACE 0%, rgba(20, 122, 206, 0.00) 10%, rgba(20, 122, 206, 0.00) 75%, #147ACE 100%), url(/images/marsh-mallow.jpeg) #147ACE 50% / cover no-repeat",
          }}
        ></div>

        {/* Heading on Top */}
        <div className="relative z-20 opacity-100 text-center ">
          <h2 className="text-white py-5">How We Met</h2>
          <Image src={OurStoryText} className="w-9/12" />
          <div className="py-5 px-[24px] mt-4 flex flex-col gap-5">
            <Image src={Ariel} width={158} className="mx-auto" />
            <h2 className="text-left text-white">Ariel:</h2>
            <p className="text-left text-white">
              We met on a hiking trail—of all places, right? She complained the
              whole way up the mountain, but luckily, I was there to give her a
              little encouragement. I secretly snapped some pictures of her that
              always make me smirk whenever I look at them. And then, the best
              part: while I was busy setting up my tent, she offered me a
              cookie. I declined because my hands were dirty, so she offered to
              feed it to me instead. Such a simple act of kindness, but it’s
              stuck with me ever since.
            </p>
            <Image src={OurStoryPhoto} className="mx-auto w-full py-12" />
            <Image src={Lanny} width={158} className="mx-auto" />
            <h2 className="text-left text-white">Lanny:</h2>
            <p className="text-left text-white">
              Our first encounter happened on a hiking trail, an unexpected
              setting for the beginning of a meaningful connection. As it was my
              first hiking adventure, I found the terrain difficult and
              frequently voiced my frustration, unaware of his quiet
              observation. He kindly provided water and jellies to keep me up in
              reaching the peak. While he was occupied setting up my tent, I was
              socializing with new acquaintances. In a spontaneous moment, I
              offered him a cookie since his hands were full and dirty—a simple
              act that unknown to me, left a lasting impression. Since that day,
              he has invited me on numerous hiking adventures, and now, we have
              decided to start on an even greater journey—an exciting lifetime
              together.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full z-20 mt-[-5px]">
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={0}
          height={0}
          src={OurStoryBottom} // Ensure the correct path to the image
          alt="Profile Picture"
        />
      </div>

      {/* Parents Section */}
      <div
        className="relative py-16 px-[24px] bg-cover flex flex-col gap-[40px] bg-center text-center bg-no-repeat bg-white"
        id="nuptial-details"
      >
        <h3 className="text-primary">We,</h3>
        <div className="px-[33px]">
          <ImageContainer image={ArielLannyLetter} />
          <h3 className="text-[#4A7EBA]">Together</h3>
          <h4 className="text-primary">with our parents</h4>
        </div>
        <hr className="border-hr-primary" />
        <div className="px-[33px] relative">
          <h1 className="text-[#4A7EBA]">Groom's Parents</h1>
          <h4 className="text-primary">Mr. Alejandro Pasilang</h4>
          <h4 className="text-primary">Mrs. Alejandra Pasilang</h4>
          <p className="absolute left-0 right-0 top-14 opacity-20 and-blue">
            &
          </p>
        </div>
        <hr className="border-hr-primary" />
        <div className="px-[33px] relative">
          <h1 className="text-[#4A7EBA]">Bride's Parents</h1>
          <h4 className="text-primary">Mr. Rolando Mahilum</h4>
          <h4 className="text-primary">Mrs. Florencia Mahilum</h4>
          <p className="absolute left-0 right-0 top-14 opacity-20 and-blue">
            &
          </p>
        </div>
        <hr className="border-hr-primary" />
        <div className="px-[33px]">
          <h1 className="text-[#4A7EBA]">Cordially invite you</h1>
          <p className="text-primary mb-5 ">
            to witness and celebrate with us as we enter the Holy Matrimony on
          </p>
          <h4 className="text-primary">
            Saturday, October 12, 2024 <br /> at 2:00 in the afternoon
          </h4>
        </div>
        <hr className="border-hr-primary" />
        <div className="px-[33px]">
          <h1 className="text-[#4A7EBA]">Ceremony</h1>
          <p className="text-primary mb-5 italic">to be held at</p>
          <h4 className="text-primary">
            San Vicente Ferrer <br />
            Catholic Parish Church
          </h4>
          <p className="text-primary mb-5">Bato, Toledo City, Cebu</p>
          <Image src={ChurchLocation} className="mx-auto" />
          <Button
            style="primary"
            value="View Map Location"
            href="https://maps.app.goo.gl/JXWcVbGAwuKZJ1To7"
            link={true}
            newTab={true}
          />
        </div>
        <hr className="border-hr-primary" />
        <div className="px-[33px]">
          <h1 className="text-[#4A7EBA]">Reception</h1>
          <p className="text-primary mb-5 italic">will follow</p>
          <h4 className="text-primary">
            Balay sa Angkay <br />
            Ibo Toledo City, Cebu
          </h4>
          <p className="text-primary mb-5">Bato, Toledo City, Cebu</p>
          <Image src={VenueLocation} className="mx-auto" />
          <Button
            style="primary"
            value="View Map Location"
            href="https://maps.app.goo.gl/7xFDXcTY22f5iQHe9"
            link={true}
            newTab={true}
          />
        </div>
      </div>

      {/* Image Element */}
      <div className="relative w-full">
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={0}
          height={0}
          src={OurStoryTop} // Ensure the correct path to the image
          alt="Profile Picture"
        />
      </div>

      <div className="relative py-0 bg-cover bg-center text-center bg-no-repeat bg-[#147ACE]">
        {/* Entourage Section */}
        <div
          className="bg-top bg-cover bg-no-repeat absolute left-0 right-0 pt-32"
          style={{
            backgroundImage: `url(/images/with-lamp.jpeg)`,
            backgroundBlendMode: "soft-light",
            minHeight: "390px", // Ensure full height
          }}
        ></div>

        {/* Heading on Top */}
        <div className="relative z-20 opacity-100 text-center ">
          <Image src={TheEntourage} className="w-full" />
          <div className="relative py-16 px-[24px] bg-cover flex flex-col gap-[40px] bg-center text-center bg-no-repeat min-h-[550px]">
            <hr className="border-white" />
            <div className="px-[33px]">
              <h1 className="text-white">Maid of Honor</h1>
              <p className="text-white mb-5 italic">
                Supportive, dependable, best friend and confidante
              </p>
              <h4 className="text-white leading-8">Krizia Jeanne Capus</h4>
            </div>
            <hr className="border-white" />
            <div className="px-[33px]">
              <h1 className="text-white">Best Man</h1>
              <p className="text-white mb-5 italic">
                Loyal, supportive, speech-giving brother
              </p>
              <h4 className="text-white leading-8">Donjie Requiso</h4>
            </div>
            <hr className="border-white" />
            <div className="px-[33px]">
              <h1 className="text-white">Groomsmen</h1>
              <h4 className="text-white leading-8">Dorell James Galang</h4>
              <h4 className="text-white leading-8">Mark Gaudiano</h4>
              <h4 className="text-white leading-8">Archie Gimena</h4>
            </div>
            <hr className="border-white" />
            <div className="px-[33px]">
              <h1 className="text-white">Bridesmaids</h1>
              <h4 className="text-white leading-8">Charize Joy Dingding</h4>
              <h4 className="text-white leading-8">Jessa Benigay</h4>
              <h4 className="text-white leading-8">Janine Mahidlaon</h4>
            </div>
            <hr className="border-white" />
            <div className="px-[33px]">
              <h1 className="text-white">Flower Girls</h1>
              <h4 className="text-white leading-8">Ashley Jane Pasilang</h4>
              <h4 className="text-white leading-8">Andrea Marie Balbuena</h4>
              <h4 className="text-white leading-8">Alannah Zie Brillante</h4>
              <h4 className="text-white leading-8">Dayme Antoque</h4>
            </div>
            <hr className="border-white" />
            <h1 className="text-white">Bearers</h1>
            <div className="px-[33px]">
              <h2 className="text-white italic">Ring</h2>
              <h4 className="text-white leading-8">Reysean Kurt Mendrez</h4>
            </div>
            <div className="px-[33px]">
              <h2 className="text-white italic">Bible</h2>
              <h4 className="text-white leading-8">Crismhar John Mendrez</h4>
            </div>
            <div className="px-[33px]">
              <h2 className="text-white italic">Coin</h2>
              <h4 className="text-white leading-8">Paul Andi Balbuena</h4>
            </div>
            <div className="px-[33px]">
              <h2 className="text-white italic">Rosary</h2>
              <h4 className="text-white leading-8">Janrel Miñoza</h4>
            </div>
            <hr className="border-white" />

            <div className="px-[10px]">
              <div className="flex flex-col gap-[16px]">
                <div>
                  <h1 className="text-white">Principal Sponsors</h1>
                  <p className="text-white mb-5 italic">
                    to stand as principal witness to our vows
                  </p>
                </div>
                {principal.map((person) => (
                  <div
                    key={person.husband}
                    className="flex flex-col gap-5 relative"
                  >
                    <div>
                      <h4 className="text-white leading-8">{person.husband}</h4>
                      <h4 className="text-white leading-8">{person.wife}</h4>
                      <p className="absolute left-0 right-0 top-2 opacity-20 and-white">
                        &
                      </p>
                    </div>
                    {person.husband !== "Mr. Leonardo Canillo" && (
                      <hr className="border-white w-[250px] mx-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-hr-primary" />
            <h1 className="text-white">Secondary Sponsors</h1>
            {secondarySponsors.map((item) => (
              <div className="px-[33px]" key={item.title}>
                <h2 className="text-white italic">{item.title}</h2>
                <p className="description text-white">{item.description}</p>
                <h4 className="text-white leading-8">{item.husband}</h4>
                <h4 className="text-white leading-8">{item.wife}</h4>
              </div>
            ))}
            <hr className="border-hr-primary" />
            <h1 className="text-white">Offerers</h1>
            {offerers.map((item) => (
              <div className="px-[33px]" key={item.title}>
                <h2 className="text-white italic">{item.title}</h2>
                <h4 className="text-white leading-8">{item.person1}</h4>
                <h4 className="text-white leading-8">{item.person2}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full z-20 mt-[-5px]">
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={0}
          height={0}
          src={OurStoryBottom} // Ensure the correct path to the image
          alt="Profile Picture"
        />
      </div>
      <div className="relative py-24 px-[24px] bg-cover flex flex-col gap-[40px] bg-center text-center bg-no-repeat bg-white">
        <div className="flex gap-4 w-64 mx-auto">
          <div className={`rounded-full bg-[#147ACE] w-[40px] h-[40px]`} />
          <div className={`rounded-full bg-[#4A7EBA] w-[40px] h-[40px]`} />
          <div className={`rounded-full bg-[#B3C9FB] w-[40px] h-[40px]`} />
          <div className={`rounded-full bg-[#C28A35] w-[40px] h-[40px]`} />
          <div className={`rounded-full bg-[#E5C465] w-[40px] h-[40px]`} />
        </div>
        <h1 className="text-primary">Attire</h1>
        <div className="px-[33px]">
          <h4 className="text-primary leading-8">
            We try not to pick favorites but we are kindly asking our favorite
            people to join us wearing our wedding colors.
            <br />
            <br />
            Kindly wear your most comfortable formal attire. We’d love to see
            you in these colors!
          </h4>
        </div>
        <hr className="border-hr-primary" />
        <h1 className="text-primary">Gifts</h1>
        <div className="px-[33px]">
          <h4 className="text-primary leading-8">
            We feel incredible fortunate for everything that we have, and we
            consider ourselves truly blessed. Your presence and prayers are all
            that we ask for.
            <br />
            <br />
            Nonetheless, if you believe in the value of gift giving, a gift of
            cash for our future would be a delightful blessing.
          </h4>
        </div>
        <h1 className="text-primary">Scan Gcash QR code</h1>
        <div className="px-[33px]">
          <Image src={Gcash} className="mx-auto" />
        </div>
        <h3 className="text-primary">or click this number</h3>
        <h2 onClick={handleCopy} className="text-primary font-bold">
          09271293886
          <small className="text-primary block text-xs">
            {copy ? "phone number copied" : ""}
          </small>
        </h2>
      </div>

      <div className="relative w-full">
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={0}
          height={0}
          src={OurStoryTop} // Ensure the correct path to the image
          alt="Profile Picture"
        />
      </div>

      <div className="relative py-0 bg-cover bg-center text-center bg-no-repeat bg-[#147ACE]">
        {/* Background Image with Blend Mode */}
        <div
          className="bg-top bg-cover bg-no-repeat absolute left-0 right-0 pt-32"
          style={{
            backgroundImage: `url(/images/bottom-banner.jpeg)`,
            backgroundBlendMode: "soft-light",
            minHeight: "390px", // Ensure full height
          }}
        ></div>

        {/* Image Element */}

        <div className="relative z-20 py-5 opacity-100 text-center ">
          <Image src={ThankYouText} className="w-11/12" />
          <div className="py-5 px-[24px] flex flex-col gap-5">
            <hr className="border-white" />
            <h4 className="text-white text-center leading-8">
              If you wish to upload your photos during the wedding, please feel
              free to upload or share them with us. Thank you!
            </h4>
            <Button
              style="secondary"
              value="Upload Photos Here"
              link={true}
              href="https://photos.app.goo.gl/K2UgxAypxtwosj8N9"
              newTab={true}
            />
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-[-180px] h-48 w-full z-50">
          <Image
            style={{
              width: "100%",
              height: "auto",
            }}
            width={0}
            height={0}
            src={OurStoryBottom} // Ensure the correct path to the image
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}
