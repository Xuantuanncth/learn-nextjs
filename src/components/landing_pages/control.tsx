import { useState, useEffect } from 'react';

const ControlLayer = () => {
    const [start_data, setData] = useState(1);
    const [loading, setLoading] = useState(true);
    const auth_key = "vv1t8hUYi3R4hXzDAJnluDdaoFelCNOK4mTB365z";

    const startApi = "https://gravity-checker-86db2-default-rtdb.firebaseio.com/Start.json?auth="+auth_key;
    const pickApi  = "https://gravity-checker-86db2-default-rtdb.firebaseio.com/Pick.json?auth="+auth_key;

    const setDataBase = (passApi: string) => {
        console.log("Api: ",passApi);
        fetch(passApi, {
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(1)
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