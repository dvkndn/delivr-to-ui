var ExampleChild = React.createClass({
  render: function() {
    return (
      <div className="example__child">
        {this.props.children}
      </div>
    )
  }
});

var Example = React.createClass({
  mixins: [BemMixin],
  render: function() {
    return (
      <div className={"example " + (this.getModifiers("example") || "")}>
        <h1 className="example__title">{this.props.title}</h1>
        {
        React.Children.map(this.props.children, function(child) {
          return <ExampleChild>{child}</ExampleChild>
        })
        }
      </div>
    );
  }
});
