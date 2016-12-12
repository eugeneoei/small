var Article = React.createClass({
  render: function() {
    // console.log(this.props.user);
    return (
      <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 articleBox'>
        <ArticleHeader avatarUrl={this.props.article.avatarUrl} userName={this.props.article.userName} createdAt={this.props.article.createdAt} />
        <ArticleTitle title={this.props.article.title} />
        <ArticleContent content={this.props.article.content} />
        <ArticleFooter articleId={this.props.article.id} />
      </div>
    )
  }
});

var ArticleHeader = React.createClass({
  render: function() {
    var avatarUrl = this.props.avatarUrl;
    // console.log(this.props.avatarUrl);
    // console.log(avatarUrl);
    var userName = this.props.userName;
    // need to calculate time difference here;
    var days = 2;
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <div className='col-md-2 col-sm-2 col-xs-3'>
          <img src= {this.props.avatarUrl} />
        </div>
        <div className='col-md-10 col-sm-10 col-xs-9'>
          <div className='col-md-12 col-sm-12 col-xs-12'>
            {userName}
          </div>
          <div className='col-md-12 col-sm-12 col-xs-12'>
            {days} days ago
          </div>
        </div>
      </div>
    )
  }
});

var ArticleTitle = React.createClass({
  render: function() {
    var title = this.props.title;
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <h1>{title}</h1>
      </div>
    )
  }
});

var ArticleContent = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    }
  },

  // toggle length of content shown
  contentShortener: function(text, expanded) {
    if(expanded){
      return text
    }
    else {
      if (text.length < 500) {
        return text
      }  else {
        // console.log(typeof(text));
        // console.log('see here', this.props.content.slice(0,100));
        return text.slice(0,500) + " ...."
      }
    }
  },

  // toggle to show view more/less
  view: function(expanded) {
    if(expanded){
      return (
        <a onClick={this.viewFullArticle}>view less</a>
      )
    }
    else{
      return (
        <a onClick={this.viewFullArticle}>view more</a>
      )
    }
  },

  viewFullArticle: function() {
    // this function changes the state of the expanded key from true to false
    // and vice versa upon click of view more/less
    if(this.state.expanded){
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
  },

  render: function() {
    var content = this.props.content;
    // console.log('render', content);
    // console.log(typeof(content));
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <p>{this.contentShortener(content, this.state.expanded)}</p>
        {this.view(this.state.expanded)}
      </div>
    )
  }
});

var ArticleFooter = React.createClass({
  getInitialState: function() {
    return {
      articleLikes: [],
      comments: []
    }
  },

  // // ajax to get number of likes and comments of each particular article
  componentWillMount: function() {
    $.ajax({
      url: "/articles/" + this.props.articleId,
      method: "GET",
      success: function(dataFromServer) {
        this.setState({ articleLikes: dataFromServer[0] });
        // console.log(dataFromServer[0]);
        this.setState({ comments: dataFromServer[1] });
      }.bind(this),
    });
  },

  render: function() {
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <ArticlesLikes articleLikes={this.state.articleLikes} />
        <ArticlesComments comments={this.state.comments}/>
      </div>
    )
  }
});

var ArticlesLikes = React.createClass({
  getInitialState: function() {
    return {
      likeStatus: false
    }
  },

  userLike: function(status) {
    if (status) {
      return (
        <div>
          <span className="glyphicon glyphicon-heart green" aria-hidden="true"></span> {this.props.articleLikes.length}
        </div>
      )
    } else {
      return (
        <div>
          <span className="glyphicon glyphicon-heart-empty green" aria-hidden="true"></span> {this.props.articleLikes.length}
        </div>
      )
    }
  },

  render: function() {
    return (
      <div className='col-md-6 col-sm-6 col-xs-6'>
        {this.userLike(this.state.likeStatus)}
      </div>
    )
  }
});

var ArticlesComments = React.createClass({

  // need to show comments in each individual article

  response: function(commentsLength) {
    if (commentsLength > 1) {
      return (
        <div>
          {commentsLength} responses <span className="glyphicon glyphicon-comment green" aria-hidden="true"></span>
        </div>
      )
    } else {
      return (
        <div>
          {commentsLength} response <span className="glyphicon glyphicon-comment green" aria-hidden="true"></span>
        </div>
      )
    }
  },

  render: function() {
    var comments = this.props.comments.length;
    return (
      <div className='col-md-6 col-sm-6 col-xs-6'>
        {this.response(comments)}
      </div>
    )
  }
});
