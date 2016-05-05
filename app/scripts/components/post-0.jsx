/**
 *
 * @param {object}   info
 * @param {object[]} [actions]
 */
var Post = React.createClass({
  mixins: [BemMixin],
  render: function() {

    // Aside
    var asideModifiers = this.getInheritModifiers("compact");
    var asideNode = (
      <Post.Aside modifiers={asideModifiers}
                  info={this.props.info} />
    );

    // Body
    var bodyModifiers = this.getInheritModifiers("large")
    var bodyNode = (
      <Post.Body modifiers={bodyModifiers}
                 info={this.props.info} >
        {this.props.children}
      </Post.Body>
    );

    // Action
    var actionsNode = (
      <Post.Actions actions={this.props.actions}/>
    );

    // All
    var postNode = (
      <div className={this.getClassName("post")}>

        <aside className="post__aside">
          {asideNode}
        </aside>

        <main className="post__body">
          {bodyNode}
        </main>

        <aside className="post__actions">
          {actionsNode}
        </aside>

      </div>
    );

    return postNode;
  }
});