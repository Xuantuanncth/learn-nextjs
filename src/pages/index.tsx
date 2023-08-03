import HeaderLanding from "@/components/landing_pages/header";
import ControlLayer from "@/components/landing_pages/control";
import ChartLayer from "@/components/landing_pages/chart";

const index = () =>{
  return (
    <>
    <div className='w-full h-[1500px] bg-white px-[100px]'>
      <HeaderLanding></HeaderLanding>
      <ControlLayer></ControlLayer>
      <ChartLayer></ChartLayer>
    </div>
    </>
  )
};

export default index;