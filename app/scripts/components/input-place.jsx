/**
 * 
 *
 * @param {string}  name
 */

var InputPlace = React.createClass({
  render: function() {

    var id = this.props.id;

    var countryOptions = [
      "Vietnam",
      "Singapore"
    ]

    const cityOptions = [
      "Hanoi",
      "Hochiminh City"
    ]

    return (
      <Input label={this.props.label} htmlFor={id}>
        <div className="input-place">
          <div className="input-place__select">
            <Select label="Country" options={countryOptions}/>
          </div>
          <div className="input-place__select">
            <Select label="City" options={cityOptions}/>
          </div>
        </div>
      </Input>
    );
  }
});
