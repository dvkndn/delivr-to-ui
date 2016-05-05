/**
 * 
 *
 * @param {string}  name
 */

var InputPrice = React.createClass({
  mixins: [CurrencyMixin],
  getInitialState: function() {
    return {
      price: this.getCurrency(this.props.defaultValue)
    };
  },
  handleChange: function() {
    this.setState({
      price: this.refs.priceInput.value
    });
  },
  handleBlur: function() {
    this.setState({
      price: this.getCurrency(this.refs.priceInput.value)
    });
  },
  render: function() {
    var id = this.props.id;

    var inputNode = (
      <input className="input-price__text"
             type="text"
             id={id}
             ref="priceInput"
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             value={this.state.price}/>
    )

    var infoNode = (
      <span className="input-price__info">
        {this.getSubCurrency(this.state.price)}
      </span>
    )

    return (
      <Input label={this.props.label} htmlFor={id}>
        <div className="input-price">
          {inputNode}
          {infoNode}
        </div>
      </Input>
    );
  }
});
