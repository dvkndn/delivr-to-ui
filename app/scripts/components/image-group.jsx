/**
 * Display a group of images, horizontally
 *
 * @param {string[]} images - link array to images
 */

var ImageGroup = React.createClass({
  getDefaultProps: function() {
    return {
      size: {
        width: 128,
        height: 96
      }
    };
  },
  render: function() {
    var imageNodes = this.props.images.map((src) => {
      return (
        <img className="image-group__child" src={src} key={src}
             width={this.props.size.width} height={this.props.size.height}/>
      )
    });
    return (
      <div className="image-group">
        {imageNodes}
      </div>
    );
  }
});