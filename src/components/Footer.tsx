import { Linkedin } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import  labprochem from '../data/labprochem.json'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer className='bg-[url(/ui_images/footer2.png)] bg-cover bg-center '>
            <div className='h-full bg-black/70 '>
                <div className='max-w-6xl mx-auto h-full  px-4 md:px-10 lg:px-0 py-20'>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-15'>
                        <div className=''>
                            <div className='flex items-center gap-2'>
                                <span className=' border-primary p-1'>
                                    <img src="/Brand Logo.png" className='w-15' alt="" />
                                </span>
                                <span>
                                    <h1 className='text-lg  font-bold text-white'>LABPRO CHEM</h1>
                                    <p className='text-[9px] font-semibold text-white'>High-Purity Chemicals. On Time. Every Time</p>
                                </span>
                            </div>
                            <p className='text-white mt-10 text-[15px]'>Lab Pro is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. While the information...</p>
                        </div>

                        <div className=' text-white flex flex-col gap-3'>
                            <h2 className='text-lg font-bold mb-4'>Corporate</h2>
                            <Link to={"/"} className='text-sm font-bold hover:text-violet-400'>Home</Link>
                            <Link to={"/profile"} className='text-sm font-bold hover:text-violet-400'>Company Profile</Link>
                            <Link to={"/"} className='text-sm font-bold hover:text-violet-400'>Contact Us</Link>
                            <Link to={"/"} className='text-sm font-bold hover:text-violet-400'>Quality Control & Assurance</Link>
                            <Link to={"/coa"} className='text-sm font-bold hover:text-violet-400'>Certificates of Analysis</Link>
                        </div>

                        <div className=' text-white flex flex-col gap-3'>
                            <h2 className='text-lg font-bold mb-4'>Support</h2>
                            <Link to={"/certifications"} className='text-sm font-bold hover:text-violet-400'>Our Certification</Link>
                            {/* <Link to={"/"} className='text-sm font-bold hover:text-violet-400'>F.A.Qs</Link> */}
                            <Link to={"/privacy-policy"} className='text-sm font-bold hover:text-violet-400'>Privacy Policy</Link>
                            {/* <Link to={"/"} className='text-sm font-bold hover:text-violet-400'>Quality Control & Assurance</Link> */}
                            {/* <Link to={"/"} className='text-sm font-bold hover:text-violet-400'>Global Harmonized System (GHS)</Link> */}
                        </div>
                        <div className=' text-white flex flex-col gap-3 md:col-span-3 lg:col-span-1'>
                            <div>
                                <h2 className='text-lg font-bold mb-3'>Head Office</h2>
                                <p className='text-sm font-bold '>
                                    {labprochem[0].address}
                                </p>
                            </div>
                            <div>
                                <h2 className='text-lg font-bold mb-3'>Call Us</h2>
                                <p className='text-sm font-bold'>
                                    {labprochem[0].phone}
                                </p>
                            </div>
                            <div>
                                <h2 className='text-lg font-bold mb-3'>Write Us</h2>
                                <p className='text-sm font-bold'>
                                    {labprochem[0].email}
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='bg-primary px-2 md:px-10 text-white '>
                <div className='w-full md:max-w-6xl mx-auto flex flex-col md:flex-row gap-y-3 items-center justify-between  py-5'>
                    <span className='space-x-2'>
                        <span>© 2026</span>
                        <strong>LABPRO CHEM.</strong>
                        <span>
  All Rights Reserved. Crafted by{" "}
  <a
    href="https://govinda-shah.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="hover:underline cursor-pointer"
  >
    Govinda Shah
  </a>{" "}
  |{" "}
  <a
    href="https://yuvraj-verma.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="hover:underline cursor-pointer"
  >
    Yuvraj Verma
  </a>
</span>

                    </span>
                    <span className='flex items-center gap-6'>
                        <img className='w-5 cursor-pointer ' src="https://cdn.brandfetch.io/idJFz6sAsl/theme/dark/id745SkyD0.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="" />
                        <img className='w-5 cursor-pointer ' src="https://cdn.brandfetch.io/idpKX136kp/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="" />
                        <a href="https://www.instagram.com/labprochem?igsh=bnc5dGdoZm5uM212ZQ" target="_blank"><img className='w-4 lg:w-5 cursor-pointer' src="https://cdn.brandfetch.io/ido5G85nya/theme/light/idmP9VWUNi.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="" /></a>
                        {/* <img className='w-5 cursor-pointer' src="https://cdn.brandfetch.io/idS5WhqBbM/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="" />
                        <img className='w-5 cursor-pointer' src="https://cdn.brandfetch.io/idVfYwcuQz/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="" /> */}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
