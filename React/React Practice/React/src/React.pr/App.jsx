import Button from './Button'
const App = () => {

    const buttorArray = [
        {context: "Click Me", bgColor: "lightblue"},
        {context: "Submit", bgColor: "lightgreen"},
        {context: "Cancel", bgColor: "lightcoral"},
        {context: "Delete", bgColor: "lightpink"},
        {context: "Edit", bgColor: "lightyellow"}
    ]

    return (
        <>

        {
            buttorArray.map(({context, bgColor}) => (
            <Button context={context} bgColor={bgColor}> "Button" </Button>
            ))
        }

        </>
    )

}
export default App;