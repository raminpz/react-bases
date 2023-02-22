import { useState, useEffect } from "react";




const Welcome = (props) => {
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    const {name} = props;

    useEffect(()=>{
        console.log(semaforo)
    },[semaforo])

    const contar = ()=>{
        setCounter(counter + 1);
        setSemaforo(!semaforo);
    }
    

    return (
        <>
            <h1>Hola, {name}</h1> 
            <h2>Contador de React con Hooks</h2>
            <h4>EL numero del contador es : {counter}</h4>
            <p>El semaforo está en color {semaforo ? 'red': 'green'}</p>
            <button type="submit" onClick={contar}>
                Sumar Contador
            </button>   
                 
        </> 
        
    );
}
 
export default Welcome;