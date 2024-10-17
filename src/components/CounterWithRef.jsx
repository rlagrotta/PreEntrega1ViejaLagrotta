import React, { useState, useEffect, useRef } from 'react';

const CounterWithRef = () => {
    const refCount = useRef(0);

    useEffect(() => {
        console.log("se monta el componente");
    }, []);

    const addCount = () => {
        refCount.current += 1;
        console.log({ refCount });
    };

    return (
        <div>
            <div>CounterWithState</div>
            <button onClick={addCount}>Add 1</button>
            <span>{refCount.current}</span>
        </div>
    );
};

export default CounterWithRef;
