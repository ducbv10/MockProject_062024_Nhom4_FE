import request from "@/utils/request";
import { Button, Checkbox, Form } from "antd";

const DeleteAuction = (data:any) => {
  const deleteAuction = () => {
    try {
      request({
        method: 'get',
        serverType: 'java',
        apiEndpoint: `v1/auctions/${data.auctionId}`,
        onSuccess: (data: any) => {
          console.log("Return", data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form className="flex flex-col space-y-5 m-[10px]">
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Auction Form</h1>
      </div>
      <p>Are you sure you want to delete this auction?</p>
      <p>This action cannot be undone. Once you click the "Delete" button,
        the product will be permanently deleted and cannot be recovered.</p>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <p className="text-[18px] font-bold">ID</p>
          <p className="text-[18px] font-bold">Auction Name</p>
        </div>
        <div className="w-1/2 space-y-3">
          <p className="text-[18px]">{data.auctionId}</p>
          <p className="text-[18px]">{data.name}</p>
        </div>
      </div>
      <p>Please confirm your action:</p>
      <Checkbox>Yes, I would like to delete this auction.</Checkbox>
      <Button danger onClick={deleteAuction}>Delete</Button>
    </Form>
  );
}

export default DeleteAuction;