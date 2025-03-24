"use client";

import {
  Facebook,
  Instagram,
  InstagramIcon,
  Linkedin,
  Plus,
  Twitter,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import PBContainer from "../ui/PBContainer";
import Link from "next/link";
import PBButton from "../ui/PBButton";
import bkash from "../../assets/icons/BKash-bKash2-Logo.wine.svg";
import nagad from "../../assets/icons/Nagad-Logo.wine.svg";
import visa from "../../assets/icons/Visa_Inc.-Logo.wine.svg";
import mastercard from "../../assets/icons/Mastercard-Logo.wine.svg";
import google from "../../assets/icons/Google_Pay-Logo.wine.svg";
import nexus from "../../assets/icons/Google_Nexus-Logo.wine.svg";
import union from "../../assets/icons/MUFG_Union_Bank-Logo.wine.svg";
import Image from "next/image";

const paymentMethods = [bkash, nagad, visa, mastercard, google, nexus, union];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-5">
      <PBContainer maxWidth="7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center text-5xl">
                <h2 className="font-black text-[#1575B9]">Punar</h2>Bay
              </div>
            </Link>
            <p className="text-sm mt-4 font-2nd">
              PunarBay Technology FZ-LLC is a registered company, licensed by
              Bangladesh Development Authority.
            </p>
            <Link href="/user/post-ad">
              <PBButton className="mt-10">
                Post Free Ad <Plus />
              </PBButton>
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <ul className=" flex flex-col space-y-2">
              <Link href="#">About PunarBay</Link>
              <Link href="/listings">Shop</Link>
              <Link href="#">Our Blog</Link>
              <Link href="#">Become A Seller</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>Help Center & FAQ</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
              <li>Legal Policy</li>
              <li>Privacy Policy</li>
              <li>Refund & Return Policy</li>
            </ul>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {paymentMethods?.map((img, index) => (
                <div key={index} className=" bg-white rounded-md p-1">
                  <Image
                    src={img}
                    alt={`Payment Method ${index + 1}`}
                    height={60}
                    width={60}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Track Your Order</li>
              <li>Raise A Claim</li>
              <li>Track Your Claim</li>
            </ul>
          </div>
        </div>
      </PBContainer>
      <div className=" border-b border-neutral-600 w-full my-10" />

      <PBContainer maxWidth="7xl">
        <div className="flex items-center justify-between">
          <div>
            <p className=" text-gray-300 md:font-medium text-sm md:text-lg">
              &copy; {currentYear} PunarBay. All rights reserved.
            </p>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" rounded-md p-2 bg-[#1575B9]">
              <Facebook />
            </div>
            <div className=" rounded-md p-2 bg-[#1575B9]">
              <Youtube />
            </div>
            <div className=" rounded-md p-2 bg-[#1575B9]">
              <InstagramIcon />
            </div>
            <div className=" rounded-md p-2 bg-[#1575B9]">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </PBContainer>
    </footer>
  );
};

export default Footer;
