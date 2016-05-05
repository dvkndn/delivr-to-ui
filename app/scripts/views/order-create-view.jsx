var OrderCreateView = React.createClass({
  mixins: [ButtonMixin],
  render: function() {
    
    var headerNode = (
      <Header action={this.getButton("send")} title="Place Order"/>
    );
    var bodyNode = (
      <div className="order-create-view">
        <Form>
          <fieldset>

            <InputTextButton label="Link" id="order-link"
                             placeholder="1000"
                             button={this.getButton("paste")} />

            <InputText label="Name" id="order-name"
                       placeholder="1000"/>

            <InputPrice label="Price" id="order-price"/>
            <Description>
              This is the total price, including VAT and other fees.
              Consider this as the total money you need to buy it
              yourself. Traveller can suggest a different value when
              offer.
            </Description>

            <InputImages label="Photos" id="order-photos" />
          </fieldset>
          <fieldset>
            <InputPlace label="From" id="order-from" />
            <InputPlace label="To" id="order-to" />
            <InputPrice label="Reward" id="order-reward"/>
            <InputDate label="Due" id="order-date" defaultValue="2016-01-24"/>
            <Description>
              This is the date on which you expect to receive your product. The traveller can also suggest a different date when offer.
            </Description>
            <InputTextArea label="Note" id="order-note" />
          </fieldset>
        </Form>
      </div>
    );

    return (
      <Screen header={headerNode}>
        {bodyNode}
      </Screen>
    );
  }
});
