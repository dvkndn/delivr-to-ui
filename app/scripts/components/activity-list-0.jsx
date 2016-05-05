var ActivityList = React.createClass({
  render: function() {
    
    // Activities
    var activityNodes = this.props.activities.map((activity, index) => {
      return (
        <div className="activity-list__child list__child" key={index}>
          <ActivityList.Child activity={activity}/>
        </div>
      )
    })

    return (
      <div className="activity-list list">
        {activityNodes}
      </div>      
    );
  }
});