/**
 * Display an icon, using Material Design Icons
 *
 * @param {string} icon - name of the icon to display, follow Material Design
 */

var Icon = React.createClass({
  render: function() {
    var _class = "material-icons " + this.props.className;
    return (
      <i className={_class}>
        {this.props.icon}
      </i>
    );
  }
});
