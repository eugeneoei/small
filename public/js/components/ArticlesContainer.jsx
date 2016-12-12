var ArticlesContainer = React.createClass({

  render: function() {
    console.log('hellooooooo');
    var result = this.props.articles.map(function(article, index) {
      return (
        // user here is owner of article
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
