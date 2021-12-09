import './WordSeparator.css';

const WordSeparator = ({
    children
}) => {
    return <p className="word-separator"><span>{children}</span></p>
}

export default WordSeparator;