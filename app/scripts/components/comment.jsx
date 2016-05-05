/**
 * 
 *
 * @param {object} info
 */

var Comment = React.createClass({
  render: function() {
    const info = {
      author: this.props.info.author,
      time: this.props.info.time,
      action: "commented"
    };
    return (
      <Activity info={info}>
        {this.props.children}
      </Activity>
    );
  }
});