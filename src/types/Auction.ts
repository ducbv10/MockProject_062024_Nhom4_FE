type Auction = {
  id: string,
  auctionName: string,
  auctionForm: string,
  location: string,
  productCategory: string,
  productName: string,
  productDetail: string,
  auctionMaster: string,
  status: string,
  startTime: string,
  endTime: string ,
  isLive: boolean,
  img: string
}

export type UpCommingAuction = {
  id: string,
  auctionName: string,
  auctionForm: string,
  location: string,
  productCategory: string,
  status: string,
  startTime: string,
  endTime: string,
  img: string
}

export {type Auction};