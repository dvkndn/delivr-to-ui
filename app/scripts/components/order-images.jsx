Order.Images = React.createClass({
  render: function() {
    var images = this.props.order.product.images;
    images = images.map((fileName) => {
      return "images/" + fileName
    });
    var node = (
      <ImageGroup images={images} />
    );
    return node;
  }
});