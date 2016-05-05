OrderView.Filter = React.createClass({
  render: function() {

    var labels = ["All", "Offer", "Comment", "Save"];
    var radios = labels.map((label) => {
      return {
        label: label,
        value: label.toLowerCase()
      };
    });

    return (
      <InputRadioGroup label="Show:" id="activities-filter" default="all"
                       radios={radios} modifiers="compact transparent"/>
    );
  }
});
