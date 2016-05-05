/**
 * 
 *
 * @param {ReactComponent} header
 * @param {ReactComponent} overlay
 */

var Screen = React.createClass({
  mixins: [BemMixin],
  render: function() {

    var className = this.getClassName("screen");

    // if overlay defined
    if (!_.isUndefined(this.props.overlay)) {
      className += " screen--overlay-open";
    };
    
    return (
      <div className={className}>
        <div className="screen__header">
          {this.props.header}
        </div>
        <div className="screen__body">
          {this.props.children}
        </div>
        <div className="screen__overlay">
          {this.props.overlay}
        </div>
      </div>
    );
  }
});