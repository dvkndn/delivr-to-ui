// This is a temporary view, cloned from order view
// Dont need to refactor this

var TEMPOrderWithOfferView = React.createClass({
  render: function() {
    return (
      <Screen overlay={<OfferCreateView/>}>
        <div className="order-view">

          <div className="order-view__overview">
            <Order order={DATA.order.overview}/>
          </div>

          <div className="order-view__activities-filter">
            <OrderView.Filter/>
          </div>

          <div className="order-view__activity-list">
            <ActivityList activities={DATA.order.activities}/>
          </div>

          <div className="order-view__comment-box">
            <OrderView.CommentBox/>
          </div>

        </div>
      </Screen>
    );
  }
});
