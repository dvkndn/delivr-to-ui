var Order = React.createClass({
  mixins: [ButtonMixin, CurrencyMixin],
  render: function() {
    var order = this.props.order;

    // description
    var descriptionNode = (
      <Order.Description order={order}/>
    );

    // image
    var imagesNode = (
      <Order.Images order={order}/>
    );

    // info
    var infoNode = (
      <Order.Info order={order}/>
    );

    // post children
    var post = {};
    post.body = (
      <div className="order__body">
        
        <div className="order__description">
          {descriptionNode}
        </div>

        <div className="order__photos">
          {imagesNode}
        </div>

        <div className="order__info">
          {infoNode}
        </div>

      </div>
    );

    // post actions
    post.actions = this.getButtonGroup("order");
    post.actions[0].modifiers = "primary";

    post.info = {
      author: order.author,
      time: order.time
    };

    var node = (
      <div className="order">
        <Post modifiers="large" info={post.info} actions={post.actions}>
          {post.body}
        </Post>
      </div>
    );

    return node;
  }
});