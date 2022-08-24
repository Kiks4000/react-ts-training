import React from 'react'

interface CompProps {
    firstName: string;
    lastName?: string;
    buttonClicked?: () => void;
}

function Comp(props: CompProps) {

    const fullname = props.firstName + ' ' + props.lastName;

    const f: (n:number) => number = (n:number) => n * 2;

    return (
        <>
        <h1>Hello mon canard 🦆</h1>
        <p>Your name is {props.firstName}</p>
        <p>And your family name is {props.lastName}</p>
        <p>Your full name is {fullname}</p>
        <button onClick={props.buttonClicked}>BURN ALL</button>
        <p>{f(2)}</p>     
        </>
    )
}

export default Comp