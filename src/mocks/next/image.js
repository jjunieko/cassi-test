const MockedImage = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
  };
  
  module.exports = MockedImage;
  module.exports.__esModule = true;