import { Button, Input } from "antd";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { FaFacebook, FaLocationDot, FaPhoneVolume, FaYoutube, } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
    const logo = './src/assets/images/logo.jpg'

    return (
        <div>
            <footer className="bg-black dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">Contact with Bidmaster</h2>
                            <hr className='border-mainBgColor bg-mainBgColor w-12 h-1 rounded-sm' />
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-3 mt-7 flex">
                                    <FaLocationDot />
                                    <a href="#" className="hover:underline ps-2">48 Cao Thang, Hai Chau, Đa Nang</a>
                                </li>
                                <li className="mb-3 mt-7 flex">
                                    <FaPhoneVolume />
                                    <a href="#" className="hover:underline ps-2">1900 1020</a>
                                </li>
                                <li className="mb-3 mt-7 flex">
                                    <IoMdMail />
                                    <a href="#" className="hover:underline ps-2">noithattandt@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">About Us</h2>
                            <hr className='border-mainBgColor bg-mainBgColor w-12 h-1 rounded-sm' />
                            <ul className="text-white dark:text-gray-400 font-medium mt-7 gap-5">
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">Introduction</a>
                                </li>
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">Operating regulations</a>
                                </li>
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">How to resolve conflict</a>
                                </li>
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">How to use</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">Our Policy</h2>
                            <hr className='border-mainBgColor bg-mainBgColor w-12 h-1 rounded-sm' />                            
                            <ul className="text-white dark:text-gray-400 font-medium mt-7 gap-5">
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">Frequently questions</a>
                                </li>
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">Legal documents</a>
                                </li>
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">Information security policy</a>
                                </li>
                                <li className="mb-4 flex">
                                    <a href="#" className="hover:underline">Terms of use</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">Connect With Us</h2>
                            <hr className='border-mainBgColor bg-mainBgColor w-12 h-1 rounded-sm' />                            
                            <ul className="text-white dark:text-gray-400 font-medium flex mt-7 gap-5">
                                <li className="">
                                    <a href="#" className="hover:underline"><FaInstagramSquare className="w-7 h-7 text-white bg-red-500 rounded-sm" /></a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:underline"><FaFacebook className="w-7 h-7 p1 text-blue-500 bg-white rounded-full border-none"/></a>
                                </li>
                                <li className="">
                                    <a href="#" className="hover:underline"><FaYoutube className="w-7 h-7 p-1 text-white bg-red-500 rounded-full" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                            <img src={logo} alt="" />
                        </span>
                        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse" style={{ width: 293, height: 40 }}>
                            <div className="relative mt-2 shadow-sm">
                                <Input type="text" className="rounded-none w-full border-0 py-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6" placeholder="Your email ..."></Input>
                                <Button className="absolute inset-y-0 right-0 flex items-center mt-1 mr-1 rounded-none border-none text-white bg-mainBgColor hover:bg-mainBgHoverColor">
                                    <IoIosSend/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;