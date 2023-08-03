import { useState, useEffect } from 'react';

const ControlLayer = () => {
    const [start_data, setData] = useState(1);
    const [loading, setLoading] = useState(true);

    const startApi = "https://logic-project-66bbf-default-rtdb.firebaseio.com/Start.json";
    const pickApi  = "https://logic-project-66bbf-default-rtdb.firebaseio.com/Pick.json";

    const setDataBase = (passApi: string) => {
        console.log("Api: ",passApi);
        fetch(passApi, {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(start_data)
        }).then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json;
        }).then((data) => {
            console.log('Updated user data:', data);
        }).catch((error) => {
            console.error('Error updating user data:', error);
        });
        setData(start_data+1);
    }

    function setPick() {
        console.log("Setting pick ");
    }

    return (
        <div className='w-full h-[362px] bg-white flex'>
            <div className='w-2/3'></div>
            <div className='ml-10 w-[200px]'>
                <button className='w-[140px] h-[60px] bg-white border-2 border-[#27A1FB] rounded-md mt-10 hover:bg-red-300 ' 
                        onClick={() => setDataBase(startApi)}>
                    <h1 className='font-[400] text-[32px] text-[#27A1FB]  leading-none text-center pt-2 font-header'>Start</h1>
                </button>
                <button className='w-[140px] h-[60px] bg-[#27A1FB] border-[#27A1FB] rounded-md mt-10 hover:bg-red-200'
                        onClick={() => setDataBase(pickApi)}>
                    <h1 className='font-[400] text-[32px] text-white leading-none text-center pt-2 font-header'>Pick</h1>
                </button>
            </div>
        </div>
    )
};

export default ControlLayer;