/**
 * Display an info group, a combination of several info list (<InfoList>)
 *
 * @param {object[][]} info - Informations
 */

var InfoGroup = React.createClass({
  render: function() {
    var infoListNodes = this.props.info.map((infoList, index) => {
      return (
        <section className="info-group__child" key={index}>
          <InfoList info={infoList}/>
        </section>
      )
    })
    return (
      <div className="info-group">
        {infoListNodes}
      </div>
    );
  }
})