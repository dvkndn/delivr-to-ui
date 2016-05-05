/**
 * 
 *
 * @param {string}    radios.name
 * @param {string[]}  radios.values
 * @param {string[]}  radios.labels
 * @param {string}    radios.default
 */

var InputRadioGroup = React.createClass({
  mixins: [BemMixin],
  render: function() {

    // Build child modifiers
    var inputModifiers = this.getInheritModifiers("compact transparent");

    // Build radio nodes
    var radios = this.props.radios;
    var nodes = [];

    nodes = this.props.radios.map((radio) => {
      var checked = radio.value === this.props.default
      return (
        <div className="input-radio-group__child" key={radio.value}>
          <InputRadio name={this.props.id} label={radio.label}
                      value={radio.value} checked={checked}/>
        </div>
      )
    });

    return (
      <Input label={this.props.label} htmlFor={this.props.id}
             modifiers={inputModifiers}>
        <div className="input-radio-group">
          {nodes}
        </div>
      </Input>
    );
  }
});
