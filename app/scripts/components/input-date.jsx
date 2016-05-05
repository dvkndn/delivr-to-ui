/**
 * 
 *
 * @param {string}  id
 * @param {string}  label
 */

var InputDate = React.createClass({
  render: function() {
    var id = this.props.id;
    return (
      <Input label={this.props.label} htmlFor={id}>
        <input className="input-date" type="date" id={id}
               defaultValue={this.props.defaultValue}/>
      </Input>
    );
  }
});
