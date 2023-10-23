import { useState } from 'react';

export default function StateBasic({init}) {
   
    const [count, setCount] = useState(init);//1
    console.log(init);
    const handleClick = () => setCount(count + 1);//2
    console.log(count);
    
    return (
        <>
        <button onClick={handleClick}>カウント</button>
        <p>{count}回、クリックしました</p>
        </>
    );
}
