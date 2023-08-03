import Image from "next/image";
import headerImage from "../../assets/images/Header.svg"
const HeaderLanding = () => {
    console.log("Header image information" , headerImage);
    return(
        <div className='w-full h-[200px] bg-[#FFF] pt-[25px]'>
            <div className='h-[150px] bg-[#7EABED] rounded-lg mx-[31px]'>
                <h1 className='font-[500] text-[70px] text-center pt-[16px] font-header'>Accelerometer and Tracker</h1>
            </div>
        </div>
    );
};

export default HeaderLanding;