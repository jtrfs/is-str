const isStr = (str) => {
  if (typeof str === "string") {
    return `Yes, it's a ${typeof str}.`;
  } else {
    return `No, it's not a string.`;
  }
};

module.exports = isStr;
