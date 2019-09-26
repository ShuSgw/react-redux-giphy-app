const header = (s = "Giphy Search App", a) => {
  switch (a.type) {
    case "SEARCHED":
      return "を検索";
    default:
      return s;
  }
};

export default header;
