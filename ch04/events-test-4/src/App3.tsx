import React, { useRef, useState } from 'react';

const App3 = () => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const elemX = useRef<HTMLInputElement>(null);
    const elemY = useRef<HTMLInputElement>(null);

    const add = () => {
        let x1: number = parseInt(elemX.current ? elemX.current.value : "", 10);
        let y1: number = parseInt(elemY.current ? elemY.current.value : "", 10);
        if(isNaN(x1)) x1 = 0;
        if(isNaN(y1)) y1 = 0;
        setX(x1);
        setY(y1);
        setResult(x1 + y1);
    }

    return (
        <div className='container'>
            x : <input id="x" type="text" defaultValue={x} ref={elemX} />
            <br/>
            y : <input id="y" type="text" defaultValue={y} ref={elemY} />
            <br/>
            <button onClick={add}>덧셈 계산</button>
            <br/>
            결과 : <span>{x + y}</span>
        </div>
    );
};

export default App3;