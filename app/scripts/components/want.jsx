/**
 * 
 *
 * @param {object} info
 */

var Want = React.createClass({
  render: function() {
    const info = {
      author: this.props.info.author,
      time: this.props.info.time,
      action: "also want this"
    };
    return (
      <Activity info={info} modifiers="compact"/>
    );
  }
});