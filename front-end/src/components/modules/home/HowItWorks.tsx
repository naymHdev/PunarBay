import PBContainer from "@/components/ui/PBContainer";
import list from "../../../assets/images/listIt.png";
import share from "../../../assets/images/shareIt.png";
import cash from "../../../assets/images/earnCash.png";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <>
      <div className="mt-4 md:mt-10 bg-white py-10 lg:py-16">
        <PBContainer maxWidth="7xl">
          <h2 className="text-lg font-semibold">How It Works</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <div>
                <Image src={list} alt="List It" width={400} height={600} />
              </div>
              <div className=" text-center mt-5">
                <h2 className=" text-xl font-bold uppercase">LIST IT</h2>
                <p className="font-2nd mt-1">
                  Closet full of clothes you never wear? Snap a photo, price it,
                  and list it in less than 60 seconds—right from your phone!{" "}
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image src={share} alt="Share It" width={400} height={600} />
              </div>
              <div className=" text-center mt-5">
                <h2 className=" text-xl font-bold uppercase">share It</h2>
                <p className="font-2nd mt-1">
                  Share listings with your followers and use daily themed Posh
                  Parties to help shoppers discover your listings! More sharing
                  = more sales.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image src={cash} alt="Cash It" width={400} height={600} />
              </div>
              <div className=" text-center mt-5">
                <h2 className=" text-xl font-bold uppercase">earn cash</h2>
                <p className="font-2nd mt-1">
                  Shipping is easy with our prepaid labels, and you’ll earn cash
                  once the item is delivered!
                </p>
              </div>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default HowItWorksSection;
