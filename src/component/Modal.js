function Modal() {
  return (
    <div>
      <div className="backdrop" />;
      <div className="modal">
        <p>Are you sure want to?</p>
        <button className="btn">Ok</button>
        <button className="btn btn--alt">Cancel</button>
      </div>
    </div>
  );
}
export default Modal;
