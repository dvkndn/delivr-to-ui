/**
 * 
 *
 * @param {object} action
 * @param {string} title
 */

var Header = React.createClass({
  mixins: [ButtonMixin, BemMixin],
  render: function() {
    var buttonModifiers = "large white icon-only";

    var closeButton = this.getButton("close");
    var closeButtonNode = (
      <Button icon={closeButton.icon} text={closeButton.text}
              modifiers={buttonModifiers}/>
    );

    var actionButtonNode = "";
    if (!_.isUndefined(this.props.action)) {
      var actionButton = this.props.action;
      actionButtonNode = (
        <Button icon={actionButton.icon} text={actionButton.text}
                modifiers={buttonModifiers}/>
      )
    }

    return (
      <header className={this.getClassName("header")}>
        <div className="header__close-button">
          {closeButtonNode}
        </div>
        <div className="header__title">
          {this.props.title}
        </div>
        <div className="header__action-button">
          {actionButtonNode}
        </div>
      </header>
    );
  }
});