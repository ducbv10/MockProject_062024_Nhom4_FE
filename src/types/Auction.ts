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
  startDate: string,
  endDate: string,
  img: string
}

export type Auctioned = {
  id: string,
  auctionName: string,
  startDate: string,
  startingPrice: string,
  image: string,
}

export {type Auction};