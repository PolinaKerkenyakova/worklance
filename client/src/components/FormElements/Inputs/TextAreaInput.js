import './TextAreaInput.scss';

const TextAreaInput = ({
    name,
    placeholder,
    defaultValue
}) => {
    return <textarea className="textarea-input" placeholder={placeholder} name={name} defaultValue={defaultValue}></textarea>
}

export default TextAreaInput;