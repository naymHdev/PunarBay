import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
  const contacts = [
    {
      icon: "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742788505/location_zsjwpe.png",
      title: "Visit Us",
      details: "14/C Tajmahal Road, Dhaka-1207, Bangladesh",
    },
    {
      icon: "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742788485/call-center_w9h5wj.png",
      title: "Call Us",
      details: "+880 1770-064053",
    },
    {
      icon: "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742788497/email_pemgh4.png",
      title: "Write to Us",
      details: "hi@punarbay.com",
    },
  ];

  return (
    <section className="py-12 mt-10 lg:mt-40 relative">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white px-6 py-10 rounded-lg"
            >
              <div className="bg-blue-100 h-20 w-20 absolute top-0 rounded-full flex items-center justify-center">
                <Image
                  src={contact.icon}
                  alt={contact.title}
                  height={50}
                  width={50}
                />
              </div>
              <h3 className="text-lg font-bold mt-4 text-gray-700">
                {contact.title}
              </h3>
              <p className="text-gray-600 mt-4 font-medium">
                {contact.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
