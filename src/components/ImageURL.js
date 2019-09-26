import React from "react";
import {connect} from "react-redux";

const ImageList = props => {
  const list = props.urlList.imageURL.map(url => {
    return (
      <li key={url}>
        <img src={url} alt="" />
      </li>
    );
  });

  return <ul>{list}</ul>;
};
const ConnectedImageList = connect(s => ({urlList: s}))(ImageList);
export default ConnectedImageList;
