ActivityList.Child = React.createClass({
  render: function() {
    const activity = this.props.activity;
    const activityInfo = {
      author: activity.author,
      time: activity.time
    };

    var activityNode;
    switch (activity.type) {
      case "save":
        activityNode = (
          <Save info={activityInfo} />
        );
        break;
      case "want":
        activityNode = (
          <Want info={activityInfo} />
        );
        break;
      case "comment":
        activityNode = (
          <Comment info={activityInfo} >
            {activity.content}
          </Comment>
        );
        break;
      case "offer":
        activityNode = (
          <Offer info={activityInfo} offer={activity.offer}/>
        );
        break;
    };

    return (
      <div>{activityNode}</div>
    );
  }
});