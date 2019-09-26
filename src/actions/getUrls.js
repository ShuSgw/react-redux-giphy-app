import giphyApi from "../APIs/giphyAPI";

const receiveData = data => {
  return {type: "RECEIVE", url: data};
};

const getUrls = word => {
  return d => {
    giphyApi(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      d(receiveData(imageUrlList));
    });
  };
};
export default getUrls;
