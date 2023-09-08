function Input({ id,data }) {
  const placeholder = "INPUT TAG HERE";
  console.log(id,data);
  return (
    <div className="rp-default-input-section">
      <div>
        <input
          className="rp-default-input-section_input"
          placeholder={placeholder}
          value={data.label}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div>
        <input
          className="rp-default-input-section_input"
          placeholder={placeholder}
          value={data.value}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      {/* <a className="rp-default-input-section_delete" onClick={() => onDelete()}>
              <DeleteButton />
            </a> */}
    </div>
  );
}

export default Input;
