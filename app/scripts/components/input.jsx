/**
 * 
 *
 * @param {string}  modifiers
 * @param {string}  htmlFor
 * @param {string}  label
 */

var Input = React.createClass({
  mixins: [BemMixin],
  render: function() {
    return (
      <div className={this.getClassName("input")}>
        <label className="input__label" htmlFor={this.props.htmlFor}>
          {this.props.label || ""}
        </label>
        <div className="input__control">
          {this.props.children}
        </div>
      </div>
    );
  }
});
