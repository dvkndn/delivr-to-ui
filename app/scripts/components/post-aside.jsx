Post.Aside = React.createClass({
  mixins: [BemMixin],
  render: function() {
    var author = this.props.info.author;
    var img = "images/" + _.kebabCase(author) + ".png";
    return (
      <div className={this.getClassName("post-aside")}>
        <img className="post-aside__avatar" src={img}/>
      </div>
    );
  }
});