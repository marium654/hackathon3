import React from "react";
import Image from "next/image";

function ShopBannerSection() {
  const data = [
    {
      iconUrl: "/images/banner_icon_1.png",
      title: "High Quality",
      description: "crafted from top materials",
      width: 40,
      height: 40,
    },
    {
      iconUrl: "/images/banner_icon_2.png",
      title: "Warranty Protection",
      description: "Over 2 years",
      width: 40,
      height: 40
    },
    {
      iconUrl: "/images/banner_icon_3.png",
      title: "Free Shipping",
      description: "Order over 150 $",
      width: 40,
      height: 40
    },
    {
      iconUrl: "/images/banner_icon_4.png",
      title: "24 / 7 Support",
      description: "Dedicated support",
      width: 40,
      height: 40
    },
  ];

  return (
    <section className="bg-[#FAF3EA] md:h-[270px] py-16 md:py-0 flex px-4 md:px-[53px]">
      <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div>
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={item.width}
                height={item.height}
              />
            </div>
            <div>
              <p className="text-customBlack font-semibold text-normal xl:text-[25px]">
                {item.title}
              </p>
              <p className="text-customGray">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopBannerSection;