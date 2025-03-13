import { Facebook, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import PBContainer from "../ui/PBContainer";
import Link from "next/link";
import PBButton from "../ui/PBButton";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <PBContainer maxWidth="7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <PBButton className="mt-10">
              Post Free Ad <Plus />
            </PBButton>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>About Revibe</li>
              <li>Shop</li>
              <li>Our Blog</li>
              <li>Become A Seller</li>
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
            <div className="flex space-x-4 mt-4">
              <img src="/visa.png" alt="visa" className="w-10" />
              <img src="/apple-pay.png" alt="apple pay" className="w-10" />
              <img src="/tabby.png" alt="tabby" className="w-10" />
              <img src="/tamara.png" alt="tamara" className="w-10" />
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
    </footer>
  );
};

export default Footer;
