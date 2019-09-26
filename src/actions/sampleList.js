import sample from "../APIs/sample";

const receiveData = data => {
  return {type: "RECEIVE", setText: data};
};

const getSampleList = () => {
  return d => {
    sample("ワード入る").then(res => {
      const data = res.data.results;
      const titles = data.map(title => title);
      d(receiveData(titles));
    });
  };
};
export default getSampleList;
