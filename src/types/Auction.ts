type Auction = {
  auctionId: string,
  name: string,
  auctionForm: string,
  location: string,
  productCategory: string,
  isSecret:string,
  productName: string,
  productDetail: string,
  auctionMaster: string,
  status: string,
  startDate: string,
  endDate: string ,
  isLive: boolean,
  img: string
}

export type UpCommingAuction = {
  auctionId: string,
  name: string,
  method: string,
  isSecret: string,
  status: string,
  startDate: string,
  endDate: string,
}

export type Auctioned = {
  auctionId: string,
  auctionName: string,
  startDate: string,
  startingPrice: string,
  image: string,
}

export type CreateAuction = {
  name: string,
  location: string,
  productCategory: string,
  productName: string,
}

export {type Auction};