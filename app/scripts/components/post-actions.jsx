Post.Actions = React.createClass({
  render: function() {
    
    var buttonGroupNode = ""
    if (!_.isUndefined(this.props.actions)) {
      buttonGroupNode = (<ButtonGroup buttons={this.props.actions}/>)
    };

    return (
      <div className="post-actions">
        {buttonGroupNode}
      </div>
    );
  }
});