/**
 * 
 *
 * @param {string}  name
 * @param {string}  value
 * @param {string}  label
 * @param {string}  checked
 */

var InputRadio = React.createClass({
  render: function() {
    var id = this.props.name + "-" + this.props.value;
    return (
      <div className="input-radio">
        <input className="input-radio__control" type="radio" id={id}
               name={this.props.name} value={this.props.value}
               defaultChecked={this.props.checked}/>
        <label className="input-radio__label" htmlFor={id}>
          {this.props.label}
        </label>
      </div>
    );
  }
});
