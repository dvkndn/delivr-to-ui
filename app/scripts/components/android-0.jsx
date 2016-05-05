var Android = React.createClass({
  render: function() {
    return (
      <div className="android">
        <div className="android__status">
          <Android.Status/>
        </div>
        <div className="android__screen">
          {this.props.children}
        </div>
        <div className="android__navigation">
          <Android.Navigation/>
        </div>
      </div>
    );
  }
});