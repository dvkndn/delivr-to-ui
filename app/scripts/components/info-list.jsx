/**
 * Display an info list, a combination of several info row (<Info>)
 *
 * @param {object[]} info - Informations
 */

var InfoList = React.createClass({
  mixins: [BemMixin],
  render: function() {
    var infoNodes = this.props.info.map((info) => {
      return (
        <li className="info-list__child" key={info.label}>
          <Info label={info.label} value={info.value} sub={info.sub}/>
        </li>
      )
    })
    return (
      <ul className={this.getClassName("info-list")}>
        {infoNodes}
      </ul>
    );
  }
})