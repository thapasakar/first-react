function Modal(props) {
  return (
    <div>
      <div className="backdrop" />;
      <div className="modal">
        <p>Are you sure want to?</p>
        <button className="btn" onClick={props.onCancel}>
          Ok
        </button>
        <button className="btn btn--alt" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default Modal;
