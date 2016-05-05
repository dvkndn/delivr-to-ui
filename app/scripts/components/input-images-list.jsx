InputImages.List = React.createClass({
  render: function() {
    return (
      <div className="input-images-list">
        <div className="input-images-list__child">
          <InputImages.Child src="images/image1.png"/>
        </div>
        <div className="input-images-list__child">
          <InputImages.Child src="images/image2.png"/>
        </div>
      </div>
    )
  }
});