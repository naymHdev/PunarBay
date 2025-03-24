import ContactUsForm from "@/components/modules/contact";
import ContactSection from "@/components/modules/contact/ContactSection";
import PBButton from "@/components/ui/PBButton";
import PBContainer from "@/components/ui/PBContainer";
import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <div className=" w-full h-[25vh] bg-[#6A7985]">
        <PBContainer maxWidth="7xl">
          <div className="pt-[70px] ml-10 md:ml-20">
            <h2 className="text-5xl font-black">
              <span className="text-yellow-500">Contact</span>{" "}
              <span className="text-white">us</span>
            </h2>
          </div>
        </PBContainer>
      </div>
      <PBContainer maxWidth="7xl">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-24 mt-5 md:mt-10">
            {/* Left Section */}
            <div className="space-y-4">
              <PBButton>How Can We Help?</PBButton>
              <p className="text-4xl font-bold text-gray-700">
                We Are Ready to Help
              </p>
              <p className="text-gray-600">
                Check our Q&A guidelines to see if your question has already
                been answered. If not, please contact us, and we will get back
                to you as soon as possible.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 hover:text-[#1575B9] border border-neutral-300 rounded-full hover:border-[#1575B9] flex items-center justify-center">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 hover:text-[#1575B9] border border-neutral-300 rounded-full hover:border-[#1575B9] flex items-center justify-center">
                  <Instagram size={20} />
                </button>
                <button className="w-10 h-10 hover:text-[#1575B9] border border-neutral-300 rounded-full hover:border-[#1575B9] flex items-center justify-center">
                  <Youtube size={20} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <ContactUsForm />
          </div>
        </div>
        <div className=" mt-8 lg:mt-16">
          <ContactSection />
        </div>
      </PBContainer>
    </>
  );
};

export default ContactUsPage;
