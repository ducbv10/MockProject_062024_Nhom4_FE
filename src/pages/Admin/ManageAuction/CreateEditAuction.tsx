import { Form, Select } from "antd";

const CreateEditAuction = () => {
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

  const CategoryOption = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
  ]

  return (
    <Form className="flex flex-col space-y-2 m-[10px]">
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Auction Form</h1>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Auction ID</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" disabled />
          </div>
          <div className="space-y-2">
            <p>Auction Name*</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" />
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
              className="w-full h-[35px]"
            />
          </div>
          <div className="space-y-2">
            <p>Location</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" />
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Product Category</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={CategoryOption}
              className="w-full h-[35px]"
            />
          </div>
          <div className="space-y-2">
            <p>Product Name*</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
          <div className="space-y-2">
            <p>Product Detail</p>
            <textarea className="w-full rounded-[5px] border-2" rows={5 } />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Auction Master*</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="space-y-2">
            <p>Status</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={AuctionFormOption}
              className="w-full h-[35px]"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Start Time</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
          <div className="space-y-2">
            <p>End Time</p>
            <input type='text' className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
        </div>
      </div>
    </Form>
  )
}

export default CreateEditAuction;