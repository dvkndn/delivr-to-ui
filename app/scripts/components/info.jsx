/**
 * Display an info row
 *
 * @param {string} label - Label
 * @param {string} value - Value
 * @param {string} [sub] - Additional information to show on right side
 */

var Info = React.createClass({
  render: function() {
    return (
      <div className="info">
        <span className="info__label">
          {this.props.label}
        </span>
        <span className="info__value">
          {this.props.value}
        </span>
        <span className="info__sub">
          {this.props.sub}
        </span>
      </div>
    );
  }
})