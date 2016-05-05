var Artboard = React.createClass({
  render: function() {
    var contentNode;
    switch (this.props.type) {
      case "android":
        contentNode = <Android>{this.props.children}</Android>;
        break;
      default:
        contentNode = this.props.children
    };
    return (
      <div className="artboard">
        <h1 className="artboard__title">
          {this.props.title}
        </h1>
        <div className="artboard__body">
          {contentNode}
        </div>
      </div>
    );
  }
});
