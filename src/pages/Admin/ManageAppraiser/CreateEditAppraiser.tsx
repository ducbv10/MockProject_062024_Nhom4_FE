import { Form } from "antd";
import { useState } from 'react';
import { Appraiser } from "@/types/Appraiser";

function CreateEditApprais() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    return (
        <Form className="flex flex-col space-y-10 m-[10px]">
            <div className="flex flex-row justify-center">
                <h1 className="bg-[#e65a4d] rounded-[10px] w-[300px] text-center text-[18px] font-bold text-white">Appraiser Form</h1>
            </div>
            <div className="flex flex-row space-x-4">
                <div className="w-4/5 space-y-5 justify-start">
                    <div className="flex flex-row items-center space-x-5">
                        <p className="w-1/4 text-end text-[grey]">Name/Organization*</p>
                        <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2"/>
                    </div>
                    <div className="flex flex-row items-center space-x-5">
                        <p className="w-1/4 text-end text-[grey]">Address</p>
                        <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
                    </div>
                    <div className="flex flex-row items-center space-x-5">
                        <p className="w-1/4 text-end text-[grey]">Email*</p>
                        <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
                    </div>
                    <div className="flex flex-row items-center space-x-5">
                        <p className="w-1/4 text-end text-[grey]">Phone*</p>
                        <input type="text" className="w-3/4 h-[35px] rounded-[5px] border-2" />
                    </div>
                </div>
            </div>
        </Form>
    );
}

export default CreateEditApprais;