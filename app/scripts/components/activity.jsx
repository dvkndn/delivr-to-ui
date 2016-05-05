/**
 * 
 *
 * @param {object}   info
 * @param {object[]} actions
 */

var Activity = React.createClass({
  mixins: [BemMixin],
  render: function() {
    const info = this.props.info;
    const actions = this.props.actions;

    // Title
    const titleNode = (
      <span>
        <span className="activity__author">
          {info.author}
        </span>
        <span> </span>
        <span>
          {info.action}
        </span>
      </span>
    );

    // Body
    const bodyNode = (
      <div className="activity__body">
        <h1 className="activity__title">
          {titleNode}
        </h1>

        <div className="activity__content">
          {this.props.children}
        </div>
      </div>
    );

    // Post
    const post = {};
    post.info = {
      author: info.author,
      time: info.time
    };
    post.actions = actions
    post.modifiers = this.getInheritModifiers("compact");
    post.children = bodyNode;
    const postNode = (
      <Post info={post.info} actions={post.actions}
            modifiers={post.modifiers}>
        {post.children}
      </Post>
    );

    // Node
    const node = (
      <div className={this.getClassName("activity")}>
        {postNode}
      </div>
    );

    return node;
  }
});