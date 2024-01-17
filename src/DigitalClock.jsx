import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime]= useState(new Date());
    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setTime(new Date());
        },300);
        return ()=>{
            clearInterval(intervalID);
        }
    },[]);

    function formatTime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const maridiem =hours>=12?"PM":"AM";
        hours=hours % 12 || 12;

        return `${hours}:${minutes}:${seconds} ${maridiem}`;
    }
    return(<>
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>

    </div>
    </>)
}

export default DigitalClock;