import { Button, Form, Select } from "antd";
import { Auction } from "@/types/Auction";
import { FC, useCallback, useEffect, useState } from "react";
import request from "@/utils/request";

interface CreateEditAuctionProps {
  auction: Auction | null;
}

const AuctionFormOption = [
  {
    value: '1',
    label: 'Private Auction',
  },
  {
    value: '2',
    label: 'Public Auction',
  },
]

const Status = [
  {
    value: '1',
    label: 'On going',
  },
  {
    value: '2',
    label: 'Closed',
  },
]

const CreateEditAuction: FC<CreateEditAuctionProps> = ({ auction }) => {
  const initialFormData = {
    auctionId: "",
    name: "",
    isSecret: "",
    productName: "",
    status: "",
    startTime: "",
    endDate: "",
  };

  useEffect(() => {
    if (auction) {
      setFormData({
        auctionId: auction.auctionId,
        name: auction.name,
        isSecret: auction.isSecret,
        productName: auction.name,
        status: auction.status,
        startTime: auction.startDate,
        endDate: auction.endDate,
      });
    }
  }, [auction])

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const updateAuction = useCallback(async () => {
    const data = (JSON.stringify(formData, null, 2));
    try {
      await request({
        method: 'put',
        data: data,
        serverType: 'java',
        apiEndpoint: 'v1/auctions',
        onSuccess: (data: any) => {
          console.log("Return",data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [formData]);

  const handleOnSubmit = () => {
    updateAuction();
  };

  return (
    <Form className="flex flex-col space-y-2 m-[10px]" onFinish={handleOnSubmit}>
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Auction Form</h1>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Auction ID</p>
            <input type='text' name="id" value={formData.auctionId} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" disabled />
          </div>
          <div className="space-y-2">
            <p>Auction Name*</p>
            <input type='text' name="name" value={formData.name} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="space-y-2">
            <p>Auction Form</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={AuctionFormOption}
              value={formData.isSecret}
              onChange={(value) => handleSelectChange('auctionForm', value)}
              className="w-full h-[35px]"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Product Name*</p>
            <input type='text' name="productName" value={formData.productName} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Status</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={Status}
              value={formData.status}
              onChange={(value) => handleSelectChange('status', value)}
              className="w-full h-[35px]"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Start Time</p>
            <input type='text' name="startTime" value={formData.startTime} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
          <div className="space-y-2">
            <p>End Time</p>
            <input type='text' name="endTime" value={formData.endDate} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-5">
        <Button onClick={() => setFormData(initialFormData)} className="bg-[#d8d8d8] px-5 py-2 rounded-[10px] text-white font-bold">Reset</Button>
        <Button htmlType="submit" className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Submit</Button>
      </div>
    </Form>
  )
}

export default CreateEditAuction;
