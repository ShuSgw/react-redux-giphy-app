import React from "react";
import {connect} from "react-redux";

const ImageList = props => {
  const list = props.urlList.imageURL.map(url => {
    return (
      <li className="item" key={url}>
        <img className="image" src={url} alt="" />
      </li>
    );
  });

  return <ul className="list">{list}</ul>;
};
const ConnectedImageList = connect(s => ({urlList: s}))(ImageList);
export default ConnectedImageList;
