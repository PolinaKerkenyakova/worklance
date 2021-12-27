import './Modal.scss';

const Modal = props => {

    const modalClickHandler = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="backdrop" onClick={props.onCancel}>
            <div className="modal" onClick={modalClickHandler}>
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
}

export default Modal;