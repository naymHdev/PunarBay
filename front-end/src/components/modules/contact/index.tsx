"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, User, Phone, ArrowUpRight } from "lucide-react";
import PBButton from "@/components/ui/PBButton";

const ContactUsForm = () => {
  return (
    <>
      <div className=" bg-[#F2F4F8] shadow p-8 rounded-lg mt-6 md:-mt-26 lg:min-w-xl">
        <form className="space-y-6">
          {/* Name Field */}
          <div className=" text-lg font-bold text-center text-gray-700">
            Didn't find the answer? <br /> Ask us questions directly
          </div>
          <div className="flex items-center border border-neutral-300 rounded-md px-3 py-2 bg-white">
            <User className="text-gray-500 w-5 h-5 mr-2" />
            <Input
              type="text"
              placeholder="Name *"
              className="border-none w-full focus:ring-0"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border border-neutral-300 rounded-md px-3 py-2 bg-white">
            <Mail className="text-gray-500 w-5 h-5 mr-2" />
            <Input
              type="email"
              placeholder="Email *"
              className="border-none w-full focus:ring-0"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center border border-neutral-300 rounded-md px-3 py-2 bg-white">
            <Phone className="text-gray-500 w-5 h-5 mr-2" />
            <Input
              type="text"
              placeholder="Phone"
              className="border-none w-full focus:ring-0"
            />
          </div>

          {/* Message Field */}
          <Textarea
            placeholder="Message *"
            className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none"
          />

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox className="border border-neutral-300" id="privacy" />
            <Label htmlFor="privacy" className="text-sm">
              I accept the{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
            </Label>
          </div>

          {/* Submit Button */}
          <div>
            <PBButton type="submit" className=" w-3/12 mx-auto">
              Send <ArrowUpRight />
            </PBButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
