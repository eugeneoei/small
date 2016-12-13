var ArticlesContainer = React.createClass({

  render: function() {
    var result = this.props.articles.map(function(article) {
      return (
        // user here is owner of article
        <Article key={article.id} article={article} sharedUsernameVariable={this.props.sharedUsernameVariable} />
      )
    }.bind(this));

    return (
      <div className=''>
        {result}
      </div>
    )
  }
});
