import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Inicializa o contador com zero

    useEffect(() => {
        document.title = `Contagem: ${count}`; // Atualiza o título da página com o valor do contador
    }, [count]); // Esse efeito colateral só será executado quando `count` mudar

    return (
        <div>
            <h2></h2>
            <p>Valor atual: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    );
}

export default Counter;
