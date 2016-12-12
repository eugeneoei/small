var ArticlesContainer = React.createClass({

  render: function() {
    var result = this.props.articles.map(function(article) {
      return (
        // user here isowner of article
        <Article key={article.id} article={article} />
      )
    }.bind(this));

    return (
      <div className='container'>
        {result}
      </div>
    )
  }
});
