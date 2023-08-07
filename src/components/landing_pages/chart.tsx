import React from 'react';
import { useState, useEffect } from 'react'
import Chart from '../chartJs';

const ChartLayer = () => {

    const [g_data, updateGData]= useState([]);
    const [s_data, updateSData] = useState([]);
    const [g_index, updateIndex] = useState(0);
    const [type, setType] = useState("Bar")

    useEffect(() => {
        const storeApi = "https://gravity-checker-86db2-default-rtdb.firebaseio.com/Data.json"

        const r_data = fetch(storeApi, {
            method:'GET',
        }).then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((data) => {
            console.log("Item: " ,data);
            updateGData(data);
            updateSData(dataParser(data[0]));
        }).catch((error) => {
            console.error('Error updating user data:', error);
        });
    },[]);

    function dataParser(inputArray:any){
        console.log("dataParser: ", inputArray);
        const p_data = inputArray.split(',');
        return p_data;
    }

    function nextRecode() {
        const g_length = g_data.length;
        if (g_index == g_length-1) {
            updateIndex(0);
            updateSData(dataParser(g_data[0]));
        } else {
            updateIndex(g_index + 1);
            updateSData(dataParser(g_data[g_index+1]));
        }
    }

    function setTypeChart() {
        // if (type=="Bar"){
        //     setType("Line");
        // } else {
        //     setType("Bar");
        // }
        type=="Bar"?setType("Line"):setType("Bar");
    }

    const data_example = {
        labels: ['1st', '2nd', '3th', '4th', '5th'],
        datasets: [
          {
            label: 'Gravity',
            data:s_data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className='w-full h-[600px] bg-white'>
            <Chart data={data_example} type={type}></Chart>
            <button className='w-[140px] h-[60px] bg-white border-2 border-[#27A1FB] rounded-md mt-10 hover:bg-red-300 '
                    onClick={nextRecode}
            >
                <h1 className='font-[400] text-[28px] text-[#27A1FB]  leading-none text-center pt-2 font-header'>Lần {g_index}</h1>
            </button>
            <button className='w-[140px] h-[60px] bg-white border-2 border-[#27A1FB] rounded-md mt-10 ml-4 hover:bg-red-300 '
                    onClick={setTypeChart}
            >
                <h1 className='font-[400] text-[28px] text-[#27A1FB]  leading-none text-center pt-2 font-header'>Type {type}</h1>
            </button>
        </div>
    )
};

export default ChartLayer;