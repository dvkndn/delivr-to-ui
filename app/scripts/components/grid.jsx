var Grid = React.createClass({
  mixins: [BemMixin],

  render: function() {

    var children = this.props.children;

    var childNodes = React.Children.map(children, (child) => {
      return (
        <div className="grid__child">
          {child}
        </div>
      )
    });

    return (
      <div className={this.getClassName("grid")}>
        {childNodes}
      </div>
    );
  }
});
