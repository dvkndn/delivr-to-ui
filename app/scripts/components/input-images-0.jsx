var InputImages = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.refs.htmlInput.click();
  },
  render: function() {

    // Add Button
    const buttonNode = (
      <button className="button-round" onClick={this.handleClick}>
        <Icon className="button-round__icon" icon="add" />
      </button>
    );

    return (
      <Input label={this.props.label} htmlFor={this.props.id}>
        <div className="input-images">

          <div className="input-images__html-input">
            <input ref="htmlInput" type="file" id={this.props.id} multiple />
          </div>

          <div className="input-images__list">
            <InputImages.List />
          </div>
          
          <div className="input-images__button">
            {buttonNode}
          </div>

        </div>
      </Input>
    );
  }
});