import React from 'react'
console.log('``````````````````object`````````````````')

const ChildComponent = (props) => {
    const {name,college} = props
    console.log(props)
    console.log(props.name, 'this is my props')
    return (
        <div>
            {/* <h4>This is Child Component{props.name}</h4> */}
                        {/* <h4>This is Child Component {name}</h4> */}
                                                <h4>{name}</h4>


            {/* <h5>{props.desc}</h5> */}
                        <h5>{college}</h5>

        </div>
    )
}
export default ChildComponent
