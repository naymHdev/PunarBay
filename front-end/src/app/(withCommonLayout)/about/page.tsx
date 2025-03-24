import PBContainer from "@/components/ui/PBContainer";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <PBContainer maxWidth="7xl">
      <div className="space-y-6 py-10">
        <h1 className="text-3xl font-bold text-center">About PunarBay</h1>

        <p className="text-lg text-center">
          Hey Dear Friends, Welcome to PunarBay! It's great to have you here!
        </p>
        <p className="text-lg text-center">
          Please note that you are accessing the BETA version of{" "}
          <strong>
            <Link className="hover:text-[#1575B9]" href="/">
              PunarBay.com
            </Link>
          </strong>
          .
        </p>
        <p className="text-lg text-center">
          If you encounter any issues or have suggestions for improvement, feel
          free to reach out at <strong>support@punarbay.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold">What’s PunarBay?</h2>
        <p>
          <strong>PunarBay</strong> is a dedicated second-hand product buy-sell
          platform in <strong>Bangladesh</strong>, connecting buyers and sellers
          in a seamless and secure way.
        </p>
        <p>
          At <strong>PunarBay</strong>, we believe in sustainability and
          affordability. We provide an easy and reliable way to{" "}
          <strong>buy and sell used items</strong>, including{" "}
          <em>
            electronics, fashion, home appliances, gaming accessories,
            furniture, and more
          </em>
          .
        </p>

        <h2 className="text-2xl font-semibold">Why PunarBay?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Simple & User-Friendly</strong> – Easy navigation and smooth
            user experience.
          </li>
          <li>
            <strong>Zero Listing Fees</strong> – No charges for posting ads.
          </li>
          <li>
            <strong>100% Verified Listings</strong> – Every post is reviewed for
            authenticity.
          </li>
          <li>
            <strong>No Subscription Fees</strong> – Completely free to buy and
            sell.
          </li>
          <li>
            <strong>Eco-Friendly</strong> – Promotes sustainability by reducing
            waste.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          What’s Special About PunarBay?
        </h2>
        <p>
          <strong>PunarBay is good for our planet!</strong> By promoting the
          reuse of second-hand items, we contribute to reducing landfill waste
          and encourage sustainable consumption.
        </p>
        <p className="text-lg font-semibold text-[#1575B9]">
          ♻️ Buy & Sell Used Stuff – Be the Inspiration to RESELL, REDUCE, and
          REUSE!
        </p>

        <h2 className="text-2xl font-semibold">Where It All Began</h2>
        <p>
          The journey of <strong>PunarBay</strong> started with a simple vision
          – to create a trusted platform where people in{" "}
          <strong>Bangladesh</strong> can easily buy and sell second-hand
          products while promoting a circular economy.
        </p>
        <p>
          You can always reach out to us at{" "}
          <strong>support@punarbay.com</strong> for any queries, feedback, or
          collaboration opportunities.
        </p>

        <h2 className="text-2xl font-semibold text-center">
          Join Us in Building a Sustainable Marketplace!
        </h2>
        <p className="text-center">
          Thank you for being a part of <strong>PunarBay</strong>. Let’s make
          second-hand buying and selling the **smartest and most sustainable
          choice**! 🚀
        </p>
      </div>
    </PBContainer>
  );
};

export default AboutUsPage;
