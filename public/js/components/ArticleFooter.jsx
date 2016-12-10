var ArticleFooter = React.createClass({
  getInitialState: function() {
    return {
      articleLikes: [],
      comments: []
    }
  },

  // ajax to get number of likes and comments of each particular article
  componentWillMount: function() {
    $.ajax({
      url: "/articles" + this.props.articleId,
      method: "GET",
      success: function(dataFromServer) {
        this.setState({articleLikes: dataFromServer[0]});
        this.setState({comments: dataFromServer[1]});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("/articles", status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return {
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <ArticlesLikes articleId={this.props.articleId} user={this.props.user} articleLikes={this.state.articleLikes} />
        <ArticlesComments articleId={this.props.articleId} comments={this.state.comments}/>
      </div>
    }
  }
});
