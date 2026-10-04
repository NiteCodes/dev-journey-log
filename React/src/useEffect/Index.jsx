// import React, { useState, useEffect } from 'react';


// const Index = () => {
//     // const [count, setCount] = useState(0);
//     // const [numb, setNumb] = useState(0);

//     // useEffect(() => console.log('page rendered'));
//     // useEffect(() => console.log('page rendered'), [count]);
//     // useEffect(() => console.log('page rendered'), []);
//     //syntex of useEffect is useEffect(callback, dependencies) or useEffect(() => {callback}, [dependencies]) 
//     // //for example useEffect(() => {console.log('page rendered')}, [numb]);

//     return (
//         <div>
//             {/* <h3>Index</h3> */}
//             {/* <button onClick={() => setCount(prev => prev + 1)}>Click Count</button>
//             <p>Count: {count}</p>
//             <button onClick={() => setNumb(prev => prev + 1)}>Click Numb</button>
//             <p>Count: {numb}</p> */}

//         </div>
//     );

// }
// export default Index







import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Index = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(response, 'resp');
        setData(response?.data);
    }

    useEffect(() => { fetchData() }, []);

    console.log(data, 'data1');

    //{2 initial renders} + {2 renders (API 1)} + {2 renders (API 2)} = 6 { total console logs}
    //React intentionally mount, unmount, and re-mount your component once to help catch side-effect bugs.


    return (
        <div>
            <h1>Index</h1>

            {
                data?.map(item => (
                    <h2>{item.username}</h2>
                ))
            }

        </div>
    );

}

export default Index