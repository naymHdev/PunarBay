import PBContainer from "@/components/ui/PBContainer";
import Image from "next/image";
import pro from "../../../assets/icons/promoted.svg";
import posh from "../../../assets/icons/posh.svg";
import shipping from "../../../assets/icons/shipping.svg";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";

const ShopSellWithConfidence = () => {
  return (
    <>
      <div className="mt-4 md:mt-10 bg-white py-20">
        <PBContainer maxWidth="7xl">
          <div>
            <h2 className=" text-lg font-semibold">
              Shop Sell With Confidence
            </h2>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className=" flex items-center gap-4">
                <Image src={pro} alt="" height={400} width={400} />
                <div className=" space-y-2">
                  <h2 className=" uppercase text-xl font-bold">
                    protected payments
                  </h2>
                  <p className=" text-sm font-2nd">
                    If it’s not what you ordered, we guarantee to give your
                    money back.
                  </p>
                  <Button className=" flex items-center text-sm shadow-none border-none m-0 p-0 text-[#1575B9]">
                    Learn More <ChevronsRight className=" size-4 mt-1" />
                  </Button>
                </div>
              </div>
              <div className=" flex items-center gap-4">
                <Image src={posh} alt="" height={400} width={400} />
                <div className=" space-y-2">
                  <h2 className=" uppercase text-xl font-bold">
                    POSH AUTHENTICATE
                  </h2>
                  <p className=" text-sm font-2nd">
                    We offer free item authentication and free shipping on all
                    items $500 or more.
                  </p>
                  <Button className=" flex items-center text-sm shadow-none border-none m-0 p-0 text-[#1575B9]">
                    Learn More <ChevronsRight className=" size-4 mt-1" />
                  </Button>
                </div>
              </div>
              <div className=" flex items-center gap-4">
                <Image src={shipping} alt="" height={400} width={400} />
                <div className=" space-y-2">
                  <h2 className=" uppercase text-xl font-bold">
                    expedited shipping
                  </h2>
                  <p className=" text-sm font-2nd">
                    All orders ship via USPS Priority Mail. With our prepaid
                    labels, shipping has never been easier!
                  </p>
                  <Button className=" flex items-center text-sm shadow-none border-none m-0 p-0 text-[#1575B9]">
                    Learn More <ChevronsRight className=" size-4 mt-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </PBContainer>
      </div>
    </>
  );
};

export default ShopSellWithConfidence;
