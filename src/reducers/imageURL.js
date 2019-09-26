const initialState = [];
const imageURL = (s = initialState, a) => {
  switch (a.type) {
    case "RECEIVE":
      return a.url;
    default:
      return s;
  }
};

export default imageURL;
