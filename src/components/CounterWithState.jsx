import React, { useState, useEffect } from 'react';

const CounterWithState = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Esta función se ejecutará una sola vez cuando se monte el componente");
    }, []);

    const onAdd = () => {
        setCount(prevState => prevState + 1);
    };

    // Este efecto registra el valor actualizado de count
    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <div>CounterWithState</div>
            <button onClick={onAdd}>Add 1</button>
            <span>{count}</span>
        </div>
    );
}

export default CounterWithState;