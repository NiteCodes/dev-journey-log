// Step 1: Request Data from the Server and Convert the Raw Server Response

const fetchData = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log('fetching data...', data);
    return data;
}

// Step 3: Locate the HTML Container and Target the Specific Record

fetchData().then( users=> {

    // const frame = document.createElement('Div');           mistake 1

    const frame = document.getElementById('frame')

    const user = users[9];
    
    console.log("Full User Object:",users);



// Step 4: Create the Main Wrapper and Populate Individual Data Fields


    const container = document.createElement('div');
    container.className = 'container';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'names';
    nameDiv.textContent = user.name;
    console.log(nameDiv);

    const  emailDiv= document.createElement('div');
    emailDiv.className = 'email';
    emailDiv.textContent = user.email;
    console.log(emailDiv);


    const addressDiv = document.createElement('div');
    addressDiv.className = 'address';
    addressDiv.textContent = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
    console.log(addressDiv);


// Step 5: Assemble the Inner Card Structure and Mount to the Visible Webpage

    container.appendChild(nameDiv);
    container.appendChild(emailDiv);
    container.appendChild(addressDiv);

    frame.replaceChildren(container);
}
);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const fetchData = async () => {
//         console.log("fetching data...");

//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
//         const data = await response.json();
//         console.log("Fetched API Data:", data);
    
//         return data;

// };

// const fetchData = async () => {
//     try {

//         console.log("fetching data...");

//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         } 

//         const data = await response.json();
//         console.log("Fetched data from API:", data);
    
//         return data;

//     } catch (err) {
//         console.log("failed to fetch users data", err);
//     }

// };


// fetchData().then(users =>{
//     console.log('fetched data:',users);
//     console.log("Full User Object:", users[0]);
// })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// fetchData().then(users => {
//     const frame = document.getElementById('frame');
//     if (!frame || !users) return;

//     // Clear static/stale content once before adding cards
//     frame.innerHTML = '';

//     // Loop through every user object in the array
//     users.forEach(user => {
//         // Step 1: Create card container
//         const container = document.createElement('div');
//         container.className = 'container';

//         // Step 2: Create name element
//         const nameDiv = document.createElement('div');
//         nameDiv.className = 'names';
//         nameDiv.textContent = user.name;

//         // Step 3: Create email element
//         const emailDiv = document.createElement('div');
//         emailDiv.className = 'email';
//         emailDiv.textContent = user.email;

//         // Step 4: Create address element
//         const addressDiv = document.createElement('div');
//         addressDiv.className = 'address';
//         addressDiv.textContent = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

//         // Step 5: Assemble card
//         container.appendChild(nameDiv);
//         container.appendChild(emailDiv);
//         container.appendChild(addressDiv);

//         // Step 6: Append each user card to the main frame
//         frame.appendChild(container);
//     });
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~