import { ImHammer2 } from "react-icons/im";
import AuctionItem from "./AuctionItem";
import { PiArrowRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import request from "@/utils/request";
import { useState } from "react";
import { UpCommingAuction } from "@/types/Auction";
const auctionImg = './src/assets/images/auctionItem.png';

function UpcomingAuctions() {
  const [upcomingData, setUpcomingData] = useState<UpCommingAuction[]>([]);

  const fetchUpcommingAuction = async () => {
    try {
      const response = await request({
        method: 'get',
        serverType: 'java',
        apiEndpoint: 'v1/auctions/top-6',
      });
      setUpcomingData(response?.data);
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  // fetchUpcommingAuction();

  return (
    <div className="mx-20">
      <center>
        <p className="text-mainBgColor font-bold text-[36px]">Upcoming auctions</p>
        <div className="flex justify-center gap-5 m-2">
          <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
          <ImHammer2 size={32} className="text-mainBgColor" />
          <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
        </div>
      </center>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingData.map((auction: UpCommingAuction) => (
          <AuctionItem
            key={auction.id}
            auctionName={auction.auctionName}
            startTime={auction.startTime}
            endTime={auction.endTime}
            imgSrc={auction.img}
          />
        ))}
      </div>
      <Link to={""} className="flex items-center justify-center m-3">
        <p className="text-mainBgColor font-bold text-[24px]">View All</p>
        <PiArrowRightFill className="text-mainBgColor size-8" />
      </Link>
    </div>
  )
}

export default UpcomingAuctions;