import React from 'react'
import Button from './Button'

const App1 = () => {

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
        btnArray.map(({context,backgroundColor}) => (
            <Button context = {context} backgroundColor = {backgroundColor}/>
        ))
    }

    </>
  )
}

export default App1