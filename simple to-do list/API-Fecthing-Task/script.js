const fetchData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await data.json()
            return users
        }

        fetchData().then(data => {
            const container = document.getElementById('container')

            data.forEach(obj => {
                const username = document.createElement('h3')
                const city = document.createElement('p')
                const email = document.createElement('p')

                username.innerText = obj.username
                city.innerText = obj.address.city
                email.innerText = obj.email

                container.appendChild(username)
                container.appendChild(city)
                container.appendChild(email)
            })
        }).catch(err => console.log(err))