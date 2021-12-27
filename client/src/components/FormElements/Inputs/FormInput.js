import './FormInput.scss';

const FormInput = ({
    classes,
    type,
    placeholder,
    name,
    onChange,
    onBlur,
    defaultValue
}) => {
    return <input className={classes || 'form-input'} type={type} placeholder={placeholder} name={name} onChange={onChange} onBlur={onBlur} defaultValue={defaultValue} />
}

export default FormInput;