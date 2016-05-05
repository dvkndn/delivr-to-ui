/**
 * Display a generic button
 *
 * @param {string} text - Button's text (caption).
 * @param {string} [icon] - Button's icon. Use material icons name
 * @param {string} [modifiers] - Button's modifier(s) (BEM style),
 *                               seperated by " " (whitespace)
 */

var Button = React.createClass({
  mixins: [BemMixin],
  render: function() {
    return (
      <button className={this.getClassName("button")}>
        <Icon className="button__icon" icon={this.props.icon} />
        <span className="button__text">
          {this.props.text}
        </span>
      </button>
    );
  }
});
