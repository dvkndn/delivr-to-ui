/**
 * 
 *
 * @param {string} type
 */

var SystemKeyboard = React.createClass({
  render: function() {
    var text = "system keyboard";
    if (this.props.type === "numeric") {
      text = "system numeric keyboard"
    };
    return (
      <div className="system-keyboard">
        <h1 className="system-keyboard__text">{text}</h1>
      </div>
    );
  }
});