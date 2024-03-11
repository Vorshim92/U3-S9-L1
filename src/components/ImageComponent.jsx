import { Component } from "react";
class ImageComponent extends Component {
  render() {
    const { src, alt, classname } = this.props;
    return <img src={src} alt={alt} className={classname} />;
  }
}

export default ImageComponent;
