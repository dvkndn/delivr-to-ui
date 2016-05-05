InputImages.Child = React.createClass({
  render: function() {

    const closeButtonNode = (
      <button className="input-images-child__button button-round
                         button-round--small button-round--icon-only"
              type="button" >
        <Icon className="button-round__icon" icon="remove_circle" />
      </button>
    );

    const imgNode = (
      <img className="input-images-child__img" src={this.props.src}
           width="96" height="72" />
    );

    return (
      <div className="input-images-child">
        {closeButtonNode}
        {imgNode}
      </div>
    )
  }
});