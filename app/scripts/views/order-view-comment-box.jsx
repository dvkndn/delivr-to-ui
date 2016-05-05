OrderView.CommentBox = React.createClass({
  mixins: [ButtonMixin],
  render: function() {

    return (
      <InputTextButton id="comment-input"
                       placeholder="Enter your comment"
                       button={this.getButton("send")}
                       modifiers="primary"/>
    );
  }
});
