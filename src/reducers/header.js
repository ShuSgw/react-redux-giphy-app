const header = (s = "Giphy Search App", a) => {
  switch (a.type) {
    case "SEARCHED":
      return `${a.text} is searched`;
    default:
      return s;
  }
};

export default header;
