import './TextAreaInput.css';

const TextAreaInput = ({
    name,
    placeholder
}) => {
    return <textarea className="textarea-input" placeholder={placeholder} name={name}></textarea>
}

export default TextAreaInput;