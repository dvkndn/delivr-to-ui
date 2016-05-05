var Description = React.createClass({
  render: function() {
    return (
      <div className="description">
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
});
