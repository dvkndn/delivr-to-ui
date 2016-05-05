/**
 * 
 *
 * @param {string}  id
 * @param {string}  label
 * @param {string}  placeholder
 * @param {string}  defaultValue
 */

var InputTextArea = React.createClass({
  componentDidMount: function() {
    autosize(this.refs.textArea);
  },
  render: function() {
    var id = this.props.id;
    return (
      <Input label={this.props.label} htmlFor={id}>
        <textarea type="text" id={id} placeholder={this.props.placeholder}
                  ref="textArea" rows="1"
                  defaultValue={this.props.defaultValue}/>
      </Input>
    );
  }
});
