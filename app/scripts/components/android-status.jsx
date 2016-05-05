Android.Status = React.createClass({
  render: function() {
    var _time = moment().format("HH:mm");
    var _icons = ["network_wifi", "network_cell", "battery_full"];
    var _iconNodes = _icons.map(
      (icon) => (
        <Icon className="android-status__icon" icon={icon} key={icon}/>
      )
    );
    return (
      <div className="android-status">
        {_iconNodes}
        <span className="android-status__time">
          {_time}
        </span>
      </div>
    );
  }
});
