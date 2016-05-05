/**
 * 
 *
 * @param {string}  id
 * @param {string}  label
 * @param {string}  placeholder
 * @param {string}  defaultValue
 */

var InputText = React.createClass({
  render: function() {
    var id = this.props.id;
    return (
      <Input label={this.props.label} htmlFor={id}>
        <input type="text" id={id} placeholder={this.props.placeholder}
               defaultValue={this.props.defaultValue}/>
      </Input>
    );
  }
});
