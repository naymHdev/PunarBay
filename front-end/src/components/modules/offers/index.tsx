import Image from "next/image";

const offers = [
  {
    category: "PunarBay Offers",
    items: [
      {
        title: "EXCHANGE OFFER: 13%",
        description: "Get 13% extra up to 6,000 tk",
        validTill: "Dec 31, 2025",
        imgSrc:
          "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742730747/12_gxwe9z.png",
      },
    ],
  },
  {
    category: "Sell offers",
    items: [
      {
        title: "LAPTOP SELL OFFER: 12%",
        description: "Get 12% extra up to 3,000 tk",
        validTill: "Dec 31, 2025",
        imgSrc:
          "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742730759/13_tcqfls.png",
      },
      {
        title: "CASH OFFER",
        description: "Get 0 tk extra",
        validTill: "Dec 31, 2025",
        imgSrc:
          "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742730765/14_qafx1m.png",
      },
      {
        title: "SELL OFFER: 12% EXTRA CASH",
        description: "Get 12% extra up to 5,000 tk",
        validTill: "Dec 31, 2025",
        imgSrc:
          "https://res.cloudinary.com/dgrg4lmww/image/upload/v1742730766/15_hldoad.png",
      },
    ],
  },
];

export default function OfferCards() {
  return (
    <div className="">
      {offers.map((offer) => (
        <div key={offer.category} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{offer.category}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {offer.items.map((item, index) => (
              <div
                key={index}
                className="border border-neutral-400 rounded-lg p-4 shadow-sm bg-white flex items-center gap-4"
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-blue-600 font-medium">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    Valid Till: {item.validTill}
                  </p>
                  <p className="text-xs text-gray-500">*T&C Apply</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
