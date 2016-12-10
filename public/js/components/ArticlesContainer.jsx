var ArticlesContainer = React.createClass({
  getInitialState: function() {
    return {
      articles: [],
      user: []
    }
  },

  // ajax request for all articles and current user information
  // GET JSON from the server and update the state to reflect the latest data
  componentWillMount: function() {
    $.ajax({
      url: "/articles",
      method: "GET",
      success: function(dataFromServer) {
        this.setState({articles: dataFromServer[0]});
        this.setState({user: dataFromServer[1]});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("/articles", status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var result = this.state.articles.map(function(article) {
      <Article key={article.id} article={article} user={this.state.user}/>
    }.bind(this));

    return {
      <div className='container'>
        {result}
      </div>
    }
  }
});
