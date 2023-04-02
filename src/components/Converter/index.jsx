import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { convertHexToRgb, hexSchema } from "./utils";

const Converter = () => {
  const [colorInput, setColorInput] = useState("#ffffff");
  const [output, setOutput] = useState({
    backgroundColor: colorInput,
    rgbOutput: convertHexToRgb(colorInput),
  });

  const { backgroundColor, rgbOutput } = output;

  const converterStyle = {
    backgroundColor: backgroundColor,
  };

  const paperStyle = {
    backgroundColor: backgroundColor,
    filter: "brightness(90%)",
    color: backgroundColor,
  };

  const handleChangeColor = (e) => {
    const value = e.target.value;
    setColorInput(value);

    if (value.length < 7) return;

    setOutput({
      backgroundColor: !!hexSchema.validate(value).error ? "#e84a38" : value,
      rgbOutput: !!hexSchema.validate(value).error
        ? "Ошибка"
        : convertHexToRgb(value),
    });
  };

  return (
    <div className="converter" style={converterStyle}>
      <TextField
        className="converter__input"
        variant="outlined"
        value={colorInput}
        onChange={handleChangeColor}
      />
      <Box className="converter__output" style={paperStyle}>
        <p className="output__text"> {rgbOutput}</p>
      </Box>
    </div>
  );
};

export default Converter;
