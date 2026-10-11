import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const FetchDate = () => {

//     const [data, setData] = React.useState([])

//     // const fetchAPI = async () => {
//     //     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     //     const data = await response.json()
//     //     console.log("fetching data..", data);
//     //     setData(data)
//     // }

//     const fetchAPI = async () => {
//         // 2. Axios automatically parses the response into JSON (stored in response.data)
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         console.log("fetching data..", response.data);
//         setData(response.data);

//     }

//     useEffect(() => { fetchAPI(); }, []);

//     return (

//         <div>
//             <h2>User List</h2>
//             {
//                 <ul>
//                     {data.map((user) => (
//                         <li key={user.id}> 
//                         Name: {user.name} <br/> 
//                         Email: {user.email} <br/>
//                         Address: {user.address.street}, {user.address.city} <br/>
//                         </li>
//                     ))}
//                 </ul>
//             }
//         </div>

//     );
// };
// export default FetchDate




const FetchAPI = () => {

    const [data, setData] = useState([])
    // added usestate to store data in state

    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        // axios is used to replace the fetch method, it converts html file to json (JavaScript objects) automatically
        console.log("data fetched!!", response.data);
        setData(response.data)
        // downloded data from API is stored in state
    }
    useEffect(() => { console.log('fetching data...'); fetchData() }, [])
    // function is called inside useEffect so it runs once when the component mounts , [] notdefined so it only renders while mountitng


    return (
        <div id = 'container'>
            {data.map((user) => (
                <li key={user.id} className='user-card'>
                    <h6 className='user-info'>
                        <p className='user-name'> Name: {user.name}</p>
                        <p className='user-phone'> Phone: {user.phone}</p>
                        <p className='user-email'> Email: {user.email} </p>
                        <p className='user-address'> Address: {user.address.street}, {user.address.city} </p>
                    </h6>
                </li>
            ))}

        </div>
    )
}

export default FetchAPI

