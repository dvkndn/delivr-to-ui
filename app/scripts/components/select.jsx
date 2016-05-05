var Select = React.createClass({
  mixins: [BemMixin],
  handleChange: function() {
    const inputRef = this.refs.testInput;
    let isDefaultValueSelected = inputRef.value === this.props.label;
    if (isDefaultValueSelected) {
      inputRef.classList.add("select--clean");
    } else {
      inputRef.classList.remove("select--clean");
    };
  },
  render: function() {
    const optionsNode = this.props.options.map((option, index) => {
      return <option key={index}>{option}</option>
    });
    return (
      <select ref="testInput"
              id="test"
              className={this.getClassName("select") + " select--clean"}
              onChange={this.handleChange} >
        <option default>{this.props.label}</option>
        {optionsNode}
      </select>
    );
  }
});
