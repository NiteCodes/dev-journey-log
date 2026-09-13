const getInitials = (fullName) => {

    let initials = ''

    for (let i = 0; i < fullName.length; i++) {
        const char = fullName[i];

        if (char >= 'A' && char <= 'Z') {
            initials += char;
        }
    }
    return initials;
};

// Testing the function:
console.log(getInitials("Adam Smith"));       // "A.S."
console.log(getInitials("Clementina DuBuque")); // "C.D."

// if (!fullName) return "";

// let initials = "";
// let isNewWord = true;

// for (let i = 0; i < fullName.length; i++) {
//     const char = fullName[i];
//     // console.log(char);
//     if (char === " ") {
//         isNewWord = true;
//     } else if (isNewWord && /[a-zA-Z]/.test(char)) {
//         initials += char.toUpperCase();
//         isNewWord = false;
//     }
// }

// return initials.trim();
// };


// Step 1: Request data from the server and convert the raw JSON response

const fetchData = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log('fetching data...', data);
    return data;
}

// Step 2: Locate the HTML container and process user records

fetchData().then(users => {

    // Target the main container element in the DOM

    const frame = document.getElementById('frame');

    // Clear any initial content or loading placeholders

    frame.innerHTML = '';

    // Step 3: Iterate through each user object in the array

    users.forEach(user => {

        // Step 4: Create the card wrapper and individual field elements

        const container = document.createElement('div');
        container.className = 'container';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'names';
        nameDiv.textContent = getInitials(user.name);
        // console.log(nameDiv);

        const emailDiv = document.createElement('div');
        emailDiv.className = 'email';
        emailDiv.textContent = user.email;
        // console.log(emailDiv);

        const addressDiv = document.createElement('div');
        addressDiv.className = 'address';
        addressDiv.textContent = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
        // console.log(addressDiv);

        // Step 5: Assemble the inner card structure

        container.appendChild(nameDiv);
        container.appendChild(emailDiv);
        container.appendChild(addressDiv);

        // Step 6: Mount the finished card to the visible web page

        frame.appendChild(container);

    });

});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Step 1: Request data from the server and convert the raw JSON response
// const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     console.log('fetching data...', data);
//     return data;
// }

// fetchData().then(users => {
//                                                                                                                                                             // Step 2: Locate the target HTML container and initialize an in-memory DocumentFragment
//     const frame = document.getElementById('frame');
//     const fragment = document.createDocumentFragment();
//                                                                                                                                                             // Step 3: Iterate over the array of users
//     users.forEach(user => {
//                                                                                                                                                             // Step 4: Create the card wrapper and populate child elements with user properties
//         const container = document.createElement('div');
//         container.className = 'container';

//         const nameDiv = document.createElement('div');
//         nameDiv.className = 'names';
//         nameDiv.textContent = user.name;
//         console.log(nameDiv);

//         const emailDiv = document.createElement('div');
//         emailDiv.className = 'email';
//         emailDiv.textContent = user.email;
//         console.log(emailDiv);

//         const addressDiv = document.createElement('div');
//         addressDiv.className = 'address';
//         addressDiv.textContent = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
//         console.log(addressDiv);
//                                                                                                                                                             // Step 5: Assemble the individual card structure
//         container.appendChild(nameDiv);
//         container.appendChild(emailDiv);
//         container.appendChild(addressDiv);
//                                                                                                                                                             // Append the assembled card into the off-screen memory fragment
//         fragment.appendChild(container);
//     });
//                                                                                                                                                             // Step 6: Mount the entire fragment to the visible webpage in a single DOM update
//     frame.replaceChildren(fragment);
// });


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

