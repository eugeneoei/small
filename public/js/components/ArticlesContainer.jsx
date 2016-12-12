var ArticlesContainer = React.createClass({
  getInitialState: function() {
    return {
      articles: [],
      // user: []
    }
  },

  // ajax request for all articles and current user information
  // GET JSON from the server and update the state to reflect the latest data
  componentWillMount: function() {
    $.ajax({
      url: "/articles",
      method: "GET",
      success: function(dataFromServer) {
        // console.log(dataFromServer[0])
        this.setState({ articles: dataFromServer })
        // this.setState({user: dataFromServer[0].user});
      }.bind(this)
    });
  },

  render: function() {
    var result = this.state.articles.map(function(article) {
      // console.log(article.user);
      return (
        // user here isowner of article
        <Article key={article.id} article={article} />
        // <Article key={article.id} article={article} user={article.user} articleLikes={article.articleLikes} articleComments={article.comments}/>
      )
    }.bind(this));

    return (
      <div className='container'>
        {result}
      </div>
    )
  }
});
