/**
 * 
 *
 * @param {string} author
 * @param {string} time
 * @param {object[]} offer
 */

var Offer = React.createClass({
  mixins: [CurrencyMixin, TimeMixin],
  render: function() {

    const info = this.props.info;
    const activityInfo = {
      author: info.author,
      time: info.time,
      action: "offered"
    };

    const offer = this.props.offer;
    const offerInfo = [
      {
        label: "Price",
        value: this.getCurrency(offer.price),
        sub: "\u2248 " + this.getSubCurrency(offer.price)
      }, {
        label: "Reward",
        value: this.getCurrency(offer.reward),
        sub: "\u2248 " + this.getSubCurrency(offer.reward)
      }, {
        label: "Date",
        value: this.formatTimeFull(offer.dueDate)
      }
    ];
    
    return (
      <div className="offer">
        <Activity info={activityInfo}>
          <div className="offer__body">
            <InfoList info={offerInfo}/>
          </div>
        </Activity>
      </div>
    );
  }
});