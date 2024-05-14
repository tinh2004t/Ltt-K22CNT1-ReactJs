import React, { useEffect, useState } from 'react'

export default function LttuseEffect() {
    //state: count
    const [count, setCount] = useState(0);

    //Ham xu ly su kien click me
    const lttHandleClick = ()=> {
        setCount(prev => prev + 1);
    }

    //Su dung ham useEffect de cap nhat lai title
    useEffect(()=> {
        document.title = `Le Tuan Tinh: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    useEffect(()=> {
        console.log("Chay lan dau tien - mot lan");
    },[]);

    //deps
    useEffect(()=> {
        console.log(`useEffect count click: ${count}`)
    },[count])
  return (
    <div><h2>Demo - useeffect</h2>
        <p>You clicked {count} times</p>
      <button onClick={lttHandleClick}>
        Click me
      </button>
    </div>

  )
}
