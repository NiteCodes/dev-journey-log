// ~task 0: understanding basic ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const App1 = () => {
//     return (
//         <div>
//             hello this is new app1
//         </div>
//     )
// }

// const App2 = () => {
//     return (
//         <div>
//             hello this is new app2
//         </div>
//     )
// }
// const App3 = () => {

//     return (
//         <div>
//             hello this is new app3
//         </div>
//     )
// }
// const App4 = () => {
//     return (
//         <div>
//             hello this is new app4
//         </div>
//     )
// }
// const App5 = () => {
//     return (
//         <div>
//             hello this is new app5
//         </div>
//     )
// }
// // export {App1,App2,App3}



// ~task 1: name and desc ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



import React from 'react'
import ChildComponent from './ChildComponent'
// import './styles.css'
import './styles.css'
import Button from './Button.jsx'



// const App = () => {
//     const name = 'Nitesh'
//     const desc = "i am a badass developer"
//     const internalStyle = {
//         color: 'blue',
//         backgroundColor: 'pink',
//     }
//     const arr = [{ name: 'pranav', college: "amity" }, { name: 'rajat', college: 'amity2' },
//     { name: "mahek", college: "IPU" }, { name: "arvind", college: "LPU" },]


//     const btnArray = [
//         {context:'login', 
//             backgroundColor:'red'
//         },
//         {context:'logout', 
//             backgroundColor:'yellow'
//         },
//         {context:'subscribe', 
//             backgroundColor:'green'
//         },
//         {context:'delete', 
//             backgroundColor:'blue'
//         },
//         {context:'comment', 
//             backgroundColor:'orange'
//         },
//         {context:'edit', 
//             backgroundColor:'pink'
//         }
//     ]


//     return (
//         <>
//             <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hello {name}</h1>
//             <h1>this is Parent Component</h1>
//             <p id="external_id" >This is extrnal styling</p>
//             {/* <ChildComponent name = 'Shivam' age = "200"/> */}
//             <ChildComponent name={name} desc={desc} />

//             {/* <h2  style={internalStyle}>this is nternal syling</h2> */}
//             {/* <h2  style={{color: internalStyle.color}}>this is nternal syling</h2> */}
//             <h2 style={{ color: internalStyle.backgroundColor }}>this is internal syling</h2>
//             {

//                 // arr.map(element => (
//                     arr.map(({name,college}) => (
//                     // <ChildComponent name={element.name} college={element.college} />
//                                         <ChildComponent name={name} college={college} />
//                 )) 
//             }

//             {/* {
//                 [1,2,3,4,5].map(() => {

//                     return (
//                         <ChildComponent />
//                     )

//                 })
//             } */}

//             {
//                 btnArray.map(({ context,backgroundColor }) => (
//                     <Button context ={context} backgroundColor = {backgroundColor} />
//                 ))
//             }

//         </>
//     )
// }


// ~task 2: button array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const App = () => {

    const btnArray = [
        {context:'login', 
            backgroundColor:'red'
        },
        {context:'logout', 
            backgroundColor:'yellow'
        },
        {context:'subscribe', 
            backgroundColor:'green'
        },
        {context:'delete', 
            backgroundColor:'blue'
        },
        {context:'comment', 
            backgroundColor:'orange'
        },
        {context:'edit', 
            backgroundColor:'pink'
        }
    ]


    return (
        <>
            {
                btnArray.map(({ context,backgroundColor }) => (
                    <Button context ={context} backgroundColor = {backgroundColor} />
                ))
            }

        </>
    )
}


export default App





