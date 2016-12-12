var IndexPage = React.createClass({
  getInitialState: function() {
    return {
      sharedUsernameVariable: '',
      articles: []
    }
  },

  // ajax request for all articles
  // GET JSON from the server and update the state to reflect the latest data
  // pass articles to sub component ArticlesContainer
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

  handleSharedUsernameVariable: function(sharedValue) {
    this.setState({ sharedUsernameVariable: sharedValue })
    // console.log(this.state.sharedUsernameVariable);
  },

  articleCreate: function(data) {
    $.ajax({
      url: "/articles",
      method: "POST",
      data: data,
      success: function(dataFromServer) {
        // unshift new post into this.state.article
        this.state.articles.unshift(dataFromServer);
        console.log(this.state.articles);
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <NavBar sharedUsernameVariable={this.state.sharedUsernameVariable} handleSharedUsernameVariable={this.handleSharedUsernameVariable} />
        <ArticleForm sharedUsernameVariable={this.state.sharedUsernameVariable} articleCreate={this.articleCreate} />
        <ArticlesContainer articles={this.state.articles} />
      </div>
    )
  }
});
