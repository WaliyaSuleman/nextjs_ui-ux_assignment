import Image from "next/image"
import PinkButton from '../../public/assets/pink-button.svg'

export function Cta() {

    return (
        <div className="w-full rounded-[16px] text-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] lg:my-[60px] lg:px-[324] lg:py-[89px]">
            <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px]">Monitor your website like a pro</h1>
            <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency!</p>
            <div className="mt-[40px] flex flex-col w-full items-center lg:flex-row lg:mt-[56px] lg:justify-center gap-x-[40px]">
                <button className="bg-white py-[16px] px-[32px] text-pink-500 font-medium w-fit rounded-[4px] ">try For Free</button>
                <button className='flex items-center gap-x-3 mt-[32px] font-medium text-[#FFFFFF] lg:text-[18px] lg:w-fit lg:mt-0 '>Contact Sales<span><Image src={PinkButton} alt=''/></span></button>

            </div>
        </div>
    )

}