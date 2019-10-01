const text = "Find Your GIFs";

const waitingText = (s = text, a) => {
  switch (a.type) {
    case "START_REQUEST":
      return "Wait...";

    case "RECEIVE":
      return text;

    default:
      return s;
  }
};

export default waitingText;
