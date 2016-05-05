/**
 * Display several buttons together. Currently support 1 to 3 buttons.
 *
 * @param {Object[]} buttons - Button array to show. Each item is an object
 *                             which satisfy <Button> component.
 */

var ButtonGroup = React.createClass({
  render: function() {
    var buttons = this.props.buttons;

    // if there are 3 buttons, show 2nd and 3rd as icon only
    var iconClass = (buttons.length === 3) ? " icon-only" : "";

    var buttonNodes = buttons.map((button, index) => {
      var modifiers = button.modifiers;
      modifiers += (index === 0) ? "" : iconClass;

      return (
        <div className="button-group__child" key={index}>
          <Button modifiers={modifiers} icon={button.icon}
                  text={button.text}/>
        </div>
      );
    });

    return (
      <div className="button-group">
        {buttonNodes}
      </div>
    )
  }
});