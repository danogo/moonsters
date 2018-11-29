import React from "react";
import LoadingSpinner from './LoadingSpinner';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  handleImageLoaded = () => {
    this.setState({ loading: false });
  }

  renderSpinner = () => {
    if (!this.state.loading) {
      return null;
    }
    return <LoadingSpinner />;
  }

  render() {
    const { src, alt } = this.props;
    return (
      <div className="image">
        <img
          src={src}
          onLoad={this.handleImageLoaded}
          alt={alt}
        />
        {this.renderSpinner()}
      </div>  
    );
  }
}
export default ImageLoader;