import { Box } from "@mui/material";

function Input({ id, data,onChange }) {
  const placeholder = "INPUT TAG HERE";
  console.log(id, data);
  return (
    <>
      <Box
        sx={{
          width: 277,
          height: 149,
          backgroundColor:'#FFFFFF'
        }}
      >
        <input
          // className="rp-default-input-section_input"
          placeholder={placeholder}
          value={data.label}
          onChange={(e) => onChange(e.target.value)}
        />
        <input
          // className="rp-default-input-section_input"
          placeholder={placeholder}
          value={data.label}
          onChange={(e) => onChange(e.target.value)}
        />
      </Box>
    </>
  );
}

export default Input;
