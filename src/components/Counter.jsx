import React, { useState, useEffect } from "react";

const Counter = () => {
  const [total, setTotal] = useState([1, 2]);
  const singleCounter = total.map((el, index) => (
    <div key={index} className="flex items-baseline gap-2">
      <button className="btn" onClick={()=>operation(index,-1)}>-</button>
      <p className="px-4">    {el}    </p>
      <button className="btn" onClick={()=>operation(index,1)}>+</button>
      <button className="btn" onClick={()=>operation(index,-total[index])}>C</button>
      <button className="btn" onClick={()=>delCounter(index)}>Del</button>
    </div>
  ));
  const addCounter = ()=> (setTotal(prev=>([...prev,0])))
  const delCounter = (index) => (setTotal(prev=>prev.filter((_,i)=>i !== index)))
  const operation = (index,amount) => (setTotal(prev=>prev.map((el,i)=>i===index?el+amount:el)))

  return (
    <>
      <div>Total: {total.reduce((a,c)=>a+c,0)}</div>
      <button onClick={addCounter} className="btn">Add Counter</button>
      <hr />
      {singleCounter}
    </>
  );
};

export default Counter;
