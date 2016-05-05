var OfferCreateView = React.createClass({
  mixins: [ButtonMixin],
  render: function() {
    
    var headerNode = (<Header action={this.getButton("send")}
                              title="Make Offer" modifiers="highlight"/>);

    var bodyNode = (
      <div className="offer-create">
        <div className="offer-create__form">
          <Form>
            <fieldset>
              <InputPrice label="Price" id="offer-price" defaultValue="1000"/>
              <InputPrice label="Reward" id="offer-reward" defaultValue="120"/>
              <InputDate label="Date" id="offer-date" defaultValue="2016-01-24"/>
            </fieldset>
          </Form>
        </div>
        <div className="offer-create__keyboard">
          <SystemKeyboard type="numeric"/>
        </div>
      </div>
    );

    return (
      <Screen modifiers="overlay" header={headerNode}>
        {bodyNode}
      </Screen>
    );
  }
});
