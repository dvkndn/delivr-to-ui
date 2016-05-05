Order.Info = React.createClass({
  mixins: [CurrencyMixin],
  render: function() {
    var order = this.props.order;

    var infoGroup = [];

    infoGroup.push([{
      label: "Price",
      value: this.getCurrency(order.product.price),
      sub: "\u2248 " + this.getSubCurrency(order.product.price)
    }, {
      label: "Reward",
      value: this.getCurrency(order.reward),
      sub: "\u2248 " + this.getSubCurrency(order.reward)
    }, {
      label: "Link",
      value: (<a href={order.product.link}>{order.product.link}</a>)
    }]);

    infoGroup.push([{
      label: "Due Date",
      value: moment.unix(order.dueDate).format("MMM Do YYYY")
    }, {
      label: "From",
      value: order.from
    }, {
      label: "To",
      value: order.to
    }]);

    infoGroup.push([{
      label: "Note",
      value: order.note
    }]);

    var node = (<InfoGroup info={infoGroup} />)
    
    return node;
  }
});