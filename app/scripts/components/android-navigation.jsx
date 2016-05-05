Android.Navigation = React.createClass({
  render: function() {
    var _dotNodes = _.times(3, function(i) {
      return (<div className="android-navigation__dot" key={i}/>)
    });
    return (
      <div className="android-navigation">
        {_dotNodes}
      </div>
    );
  }
});