import { PropTypes } from 'prop-types'

const Input = (props) => {
  return (
    <input 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e) : null }
    />
  )
}

Input.prototype = {
    onChange: PropTypes.func
}

export default Input