const Button = ({context, bgColor}) => {
  return (
    <button style = {{background: bgColor}}> {context} </button>
  )
}
export default Button;