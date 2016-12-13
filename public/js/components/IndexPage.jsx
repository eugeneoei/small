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
        this.setState({ articles: dataFromServer });
        // this.setState({user: dataFromServer[0].user});
      }.bind(this)
    });

    // start listening for any incoming sockets when component is rendered
    // but is this the correct place to put it?
    {this.socketListeners(socket)}
  },

  // list of socket listeners
  socketListeners: function(socket) {
    socket.on('new article', this.receiveNewArticle);
  },

  receiveNewArticle: function(data) {
    var userName;
    if (data.userName === '') {
      userName = 'Anonymous';
    } else {
      userName = data.userName;
    };

    // because of associations, have to declare empty array for articleLikes and comments
    // or its respective length will return undefined
    var newArticle = {
      id: this.state.articles.length + 1,
      title: data.title,
      content: data.content,
      userName: userName,
      avatarUrl: 'https://image.freepik.com/free-icon/astronaut_318-136948.jpg',
      // articleLikes: [],
      // comments: []
    };

    // unshift new article into this.state.articles
    // so latest article appears at the top
    var addedArticlesList = this.state.articles;
    addedArticlesList.unshift(newArticle);
    this.setState({ articles: addedArticlesList });

  },

  articleCreate: function(data) {
    $.ajax({
      url: "/articles",
      method: "POST",
      data: data,
      success: function(dataFromServer) {
        // unshift new post into this.state.article
        var articlesList = this.state.articles;
        // unshift so the latest article appears at the top
        articlesList.unshift(dataFromServer);
        this.setState({ articles: articlesList });
      }.bind(this)
    });

    // send new article to socket
    socket.emit('new article', data);
  },

  handleSharedUsernameVariable: function(sharedValue) {
    // console.log('this is sharedValue', sharedValue);
    // console.log(this.state.sharedUsernameVariable);
    this.setState({ sharedUsernameVariable: sharedValue });
    // console.log(this.state.sharedUsernameVariable);
    // console.log(this.state.sharedUsernameVariable.length);
  },


  render: function() {
    return (
      <div>
        <NavBar sharedUsernameVariable={this.state.sharedUsernameVariable} handleSharedUsernameVariable={this.handleSharedUsernameVariable} />
        <ArticleForm sharedUsernameVariable={this.state.sharedUsernameVariable} articleCreate={this.articleCreate} />
        <ArticlesContainer articles={this.state.articles} sharedUsernameVariable={this.state.sharedUsernameVariable} />
      </div>
    )
  }
});
