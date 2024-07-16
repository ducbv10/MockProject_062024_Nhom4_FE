import { Form, Select, Image, Upload, Radio } from "antd";
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const CreateEditProduct = () => {
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

  const SellerOption = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
  ]
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  const [cbSaleBid, setCbSaleBid] = useState(false);
  const [cbOnline, setCbOnline] = useState(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Form className="flex flex-col space-y-10 m-[10px]">
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Product Form</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-2/5 flex flex-col justify-between">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
          <div className='flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-20'>
            <Radio onClick={() => {
              if (cbSaleBid === true) {
                setCbSaleBid(false);
                setCbOnline(false);
              } else {
                setCbSaleBid(true);
                setCbOnline(false);
              }
            }}
              checked={cbSaleBid}
            >Sealed-bid auction item</Radio>
            <Radio onClick={() => {
              if (cbOnline === true) {
                setCbSaleBid(false);
                setCbOnline(false);
              } else {
                setCbSaleBid(false);
                setCbOnline(true);
              }
            }}
              checked={cbOnline}
            >Online auction item</Radio>
          </div>
        </div>
        <div className="w-3/5 space-y-5">
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Id</p>
            <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Product Name*</p>
            <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Starting Price*</p>
            <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Category</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={CategoryOption}
              className="w-3/4 h-[35px]"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Bid increment</p>
            <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Quantity</p>
            <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Seller</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={SellerOption}
              className="w-3/4 h-[35px]"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Appraiser</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={SellerOption}
              className="w-3/4 h-[35px]"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Warehouse</p>
            <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[grey]">Starting Price*</p>
        <textarea className="w-full rounded-[5px] border-2" rows={6} />
      </div>
    </Form>
  );
}

export default CreateEditProduct;