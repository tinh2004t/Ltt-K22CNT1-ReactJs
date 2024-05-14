import React, { useState } from 'react'

export default function LttuseState() {
    const [count, setCount]  = useState(0);

    //Mang
    const [list, setList] = useState([1,5]);

    //Ham xu ly su kien bien doi
    const lttHandleList =()=> {
      //sinh ngau hien mot gia tri so
      let num = parseInt(Math.random()*100);
      // Cap nhat lai State: List
      setList([
        ...list,
        num
      ])
    }
  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={lttHandleList}>Them ngau nhien</button>
    </div>
  )
}
