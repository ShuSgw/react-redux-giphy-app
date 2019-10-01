import giphyApi from "../APIs/giphyAPI";

const receiveData = data => {
  return {type: "RECEIVE", url: data};
};

const changeTitle = word => {
  return {type: "SEARCHED", text: word};
};

const startRequest = () => {
  return {type: "START_REQUEST"};
};

const getUrls = word => {
  return d => {
    d(startRequest());
    giphyApi(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      d(receiveData(imageUrlList));
      d(changeTitle(word));
    });
  };
};
export default getUrls;
