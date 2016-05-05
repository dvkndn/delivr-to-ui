/**
 * 
 *
 * @param {string} author
 * @param {string} time
 * @param {object[]} offer
 */

var Form = React.createClass({
  render: function() {
    var fieldsetNodes = React.Children.map(this.props.children, (fieldset) => {
      return (
        <Form.Fieldset>
          {fieldset.props.children}
        </Form.Fieldset>
      );
    })
    return (
      <form className="form">
        {fieldsetNodes}
      </form>
    );
  }
});

Form.Fieldset = React.createClass({
  render: function() {
    var inputNodes = React.Children.map(this.props.children, (input) => {
      return (
        <div className="form__input list__child">
          {input}
        </div>
      );
    });
    // console.log(this.props.children.props.children);
    return (
      <fieldset className="form__fieldset list">
        {inputNodes}
      </fieldset>
    )
  }
});