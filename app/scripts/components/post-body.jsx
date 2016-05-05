Post.Body = React.createClass({
  mixins: [BemMixin, TimeMixin],
  render: function() {
    var time = this.formatTimeFromNow(this.props.info.time);
    return (
      <div className={this.getClassName("post-body")}>
        <span className="post-body__time">{time}</span>
        {this.props.children}
      </div>
    );
  }
});