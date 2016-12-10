var ArticleTitle = React.createClass({
  render: function() {
    var title = this.props.title;
    return {
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <h1>{title}</h1>
      </div>
    }
  }
});
