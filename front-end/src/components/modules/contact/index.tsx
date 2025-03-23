"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, User, Phone } from "lucide-react";

const ContactUsForm = () => {
  return (
    <form className="mt-4 space-y-4">
      {/* Name Field */}
      <div className="flex items-center border rounded-md px-3 py-2 bg-white">
        <User className="text-gray-500 w-5 h-5 mr-2" />
        <Input
          type="text"
          placeholder="Name *"
          className="border-none w-full focus:ring-0"
        />
      </div>

      {/* Email Field */}
      <div className="flex items-center border rounded-md px-3 py-2 bg-white">
        <Mail className="text-gray-500 w-5 h-5 mr-2" />
        <Input
          type="email"
          placeholder="Email *"
          className="border-none w-full focus:ring-0"
        />
      </div>

      {/* Phone Field */}
      <div className="flex items-center border rounded-md px-3 py-2 bg-white">
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
        className="w-full border rounded-md px-3 py-2 focus:ring-0"
      />

      {/* Privacy Policy Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="privacy" />
        <Label htmlFor="privacy" className="text-sm">
          I accept the{" "}
          <a href="#" className="text-blue-600">
            privacy policy
          </a>
        </Label>
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
        Send →
      </Button>
    </form>
  );
};

export default ContactUsForm;
