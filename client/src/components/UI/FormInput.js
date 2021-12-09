import './FormInput.css';

const FormInput = ({
    classes,
    type,
    placeholder,
    name,
    onChange,
    onBlur,
    value
}) => {
    return <input className={classes} type={type} placeholder={placeholder} name={name} onChange={onChange} onBlur={onBlur} value={value}/>
}

export default FormInput;