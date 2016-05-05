/**
 * 
 *
 * @param {object} info
 */

var Save = React.createClass({
  render: function() {
    const info = {
      author: this.props.info.author,
      time: this.props.info.time,
      action: "saved this"
    };
    return (
      <Activity info={info} modifiers="compact"/>
    );
  }
});