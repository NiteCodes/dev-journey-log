import React, { useState } from 'react'
const UseState = () => {

    // variable_declaration_keyword[variable_name, function_name] = useState(initial_value)

    // const[x,setX] = useState(10)
    let [x, setX] = useState(10)
    //     let x = 10
    //     x = 20
    const [name, setName] = useState('Nitesh')

    const clinkHandler = () => {
        // setX((prev) => prev+1)
        setX(x => x + 1)
        console.log(x);
    }
    // console.log(x);

    const clickHandler2 = () => {
        // setName( y => y + ' Prajapati ')
        setName(prev => {
            if (prev === 'Nitesh Prajapati') {
                return 'Nitesh '
            } else {
                return 'Nitesh Prajapati'
            }
        })
        console.log(name);
    }

    return (
        <div>

            {/* <button onClick = {() => x+=1} >Click me</button> */}

            <button onClick={clinkHandler} > Number+ </button>
            <button onClick={clickHandler2} >Name+</button>

            {/* // this will not work as expected because react will not re-render the component when x changes,
            //the value of x will be updated in the console but the UI will not reflect the change. 
            //To make it work, we need to use state. 
            //hooks are used to solve this problem. useState is a hook that allows us to add state to functional components. */}

            <h2>{x}</h2>
            <h2>{name}</h2>
        </div>

    )

}
export default UseState
