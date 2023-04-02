import Joi from "joi";

export const convertHexToRgb = (hex) => {
  const bigint = parseInt(hex.split("#")[1], 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return "rgb(" + r + "," + g + "," + b + ")";
};

export const hexSchema = Joi.string().pattern(new RegExp("^#([A-Fa-f0-9]{6})$"));

