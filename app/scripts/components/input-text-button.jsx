/**
 * 
 *
 * @param {string}  name
 * @param {object}  button
 */

var InputTextButton = React.createClass({
  render: function() {
    var id = this.props.id;

    // Build child modifiers
    var buttonModifiers = "large icon-only";
    if (!_.isUndefined(this.props.modifiers)) {
      var modifiers = this.props.modifiers;

      if (modifiers.indexOf("primary") !== -1) {
        buttonModifiers += " primary";
      }
    };

    return (
      <Input label={this.props.label} htmlFor={id}>
        <div className="input-text-button">
          <div className="input-text-button__text">
            <input type="text" id={id} placeholder={this.props.placeholder}/>
          </div>
          <div className="input-text-button__button">
            <Button modifiers={buttonModifiers} icon={this.props.button.icon}
                    text={this.props.button.text}/>
          </div>
        </div>
      </Input>
    );
  }
});
