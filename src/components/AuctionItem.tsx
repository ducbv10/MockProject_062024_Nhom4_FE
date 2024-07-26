import React from 'react';
import { Button } from "antd";

interface AuctionItemType {
  auctionName: string;
  startDate: string | number;
  endDate: string | number;
  imgSrc: string;
}

const AuctionItem: React.FC<AuctionItemType> = ({ auctionName, startDate, endDate, imgSrc }) => {
  return (
    <div className="bg-white rounded-xl shadow-md flex">
      <div>
        <img src={imgSrc} alt={`${auctionName} image`} className="w-36 h-36 rounded-md" />
      </div>
      <div className='inline p-3'>
        <p className="text-xl md:text-md sm:text-sm font-semibold mb-2 text-mainBgColor">{auctionName}</p>
        <p className="text-gray-600 md:text-sm sm:text-xs">Start Date: <b>{startDate}</b></p>
        <p className="text-gray-600 md:text-sm sm:text-xs">End Date: <b>{endDate}</b></p>
        <Button className="bg-mainBgColor hover:bg-mainBgHoverColor text-white mt-4">Register</Button>
      </div>
    </div>
  );
}

export default AuctionItem;
