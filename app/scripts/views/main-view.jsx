var MainView = React.createClass({
  render: function() {
    var artboards = [
      {
        title: "Order",
        view: <OrderView/>
      }
      ,{
        title: "Create Offer",
        view: <TEMPOrderWithOfferView/>
      }
      ,{
        title: "Create Order",
        view: <OrderCreateView/>
      }
    ]
    var artboardNodes = artboards.map((artboard, index) => {
      return (
        <Artboard type="android" title={artboard.title} key={index}>
          {artboard.view}
        </Artboard>
      )
    })
    return (
      <Grid modifiers="large">
        {artboardNodes}
      </Grid>
    );
  }
});

/*
<Grid modifiers="large">
  {artboardNodes}
  <Artboard />
</Grid>
*/