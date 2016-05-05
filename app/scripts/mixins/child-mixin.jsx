var GetChildMixin = {
  getChild: function(name) {
    var children = React.Children.toArray(this.props.children);
    var result = _.find(children, (child) => {
      return child.type.displayName === name
    })
    return result
  }
};
