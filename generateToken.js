const crc = require("crc");

function generateToken(value) {
  const crcValue = crc.crc32(value);
  const token = crcValue.toString(16).padStart(8, "0");
  return token;
}

module.exports = generateToken;
