Order.Description = React.createClass({
  mixins: [CurrencyMixin],
  render: function() {
    var order = this.props.order;
    var reward = this.getCurrency(order.reward);
    
    return (
      <p className="order-description">
        <span className="order-description__author">
          {order.author}
        </span>
        <span> rewarded </span>
        <span className="order-description__reward">
          {reward}
        </span>
        <span> for </span>
        <span className="order-description__product-name">
          "{order.product.name}"
        </span>
      </p>
    );
  }
});