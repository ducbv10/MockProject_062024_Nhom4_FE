import request from '@/utils/request';
import { ImHammer2 } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { Auctioned } from '@/types/Auction';

const AuctionedProducts = () => {
    const [auctioned, setAuctioned] = useState<Auctioned[]>([]);

    "api/auctioned-products"
    const fetchAuctioned = async () => {
        try {
            const response = await request({
                method: 'get',
                serverType: 'php',
                apiEndpoint: 'auctioned-products',
            });
            setAuctioned(response?.data.data);
            console.log("autiaóđâSdá",response?.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAuctioned();
    }, []);

  return (
    <div className='text-center space-y-3'>
        <h1 className='text-[#B41712] font-semibold text-[36px]'>Auctioned product</h1>
        <div className="flex justify-center gap-5 m-2">
                    <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
                    <ImHammer2 size={32} className="text-mainBgColor" />
                    <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
        </div>
          <div className='grid gap-4 grid-cols-3 '>
              {auctioned.map((auction) => (
                  <div key={auction.auctionId}>
                      <h3>{auction.auctionName}</h3>
                      <p>Start Date: {auction.startDate}</p>
                      <p>Starting Price: {auction.startingPrice}</p>
                      <img src={auction.image} alt={auction.auctionName} />
                  </div>
              ))}
        </div>
    </div>
  )
}

export default AuctionedProducts