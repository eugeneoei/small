var Article = React.createClass({
  render: function() {
    // console.log(this.props.user);
    return (
      <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 articleBox'>
        <ArticleHeader avatarUrl={this.props.article.avatarUrl} userName={this.props.article.userName} createdAt={this.props.article.createdAt} />
        <ArticleTitle title={this.props.article.title} />
        <ArticleContent content={this.props.article.content} />
        <ArticleFooter articleId={this.props.article.id} sharedUsernameVariable={this.props.sharedUsernameVariable} />
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
      return (
        text
      )
    } else {
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
  view: function(text, expanded) {
    if(text.length > 500 && expanded){
      return (
        <a onClick={this.viewFullArticle}>view less</a>
      )
    } else if (text.length > 500 && !expanded) {
      return (
        <a onClick={this.viewFullArticle}>view more</a>
      )
    }
  },

  viewFullArticle: function() {
    // console.log("hello");
    // this function changes the state of the expanded key from true to false
    // and vice versa upon click of view more/less
    if(this.state.expanded){
      this.setState({expanded: false})
      // console.log('view full article toggle>>>>>>', this.state.expanded);
    }
    else{
      this.setState({expanded: true})
      // console.log('view full article toggle>>>>>>', this.state.expanded);
    }
  },

  render: function() {
    // console.log('this is in render function', this.state.expanded)
    var content = this.props.content;
    // console.log('render', content);
    // console.log(typeof(content));
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <p>{this.contentShortener(content, this.state.expanded)}</p>
        {this.view(content, this.state.expanded)}
      </div>
    )
  }
});

var ArticleFooter = React.createClass({
  getInitialState: function() {
    return {
      articleLikes: [],
      comments: [],
      sharedCommentsBoxStatus: false
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

  handleSharedCommentsBoxStatus: function(status) {
    // console.log('did you appear ArticleFooter component?');
    this.setState({ sharedCommentsBoxStatus: status })
  },

  render: function() {
    // console.log('footer component sharedCommentsBoxStatus', this.state.sharedCommentsBoxStatus );
    return (
      <div>
        <div className='col-md-12 col-sm-12 col-xs-12'>
          <ArticleLikes articleLikes={this.state.articleLikes} sharedUsernameVariable={this.props.sharedUsernameVariable} />
          <ArticleComments comments={this.state.comments} sharedCommentsBoxStatus={this.state.sharedCommentsBoxStatus} handleSharedCommentsBoxStatus={this.handleSharedCommentsBoxStatus} />
        </div>
        <div>
          <ArticleCommentsBox comments={this.state.comments} sharedCommentsBoxStatus={this.state.sharedCommentsBoxStatus} />
        </div>
      </div>
    )
  }
});

var ArticleLikes = React.createClass({
  getInitialState: function() {
    return {
      likeStatus: false
    }
  },

  // receive update on the change in parent status
  componentWillReceiveProps: function(nextProps) {
    this.props.articleLikes.map(function(articleLike, index) {
      if (nextProps.sharedUsernameVariable === articleLike.userName) {
        this.setState({ likeStatus: true });
      }
    }.bind(this));
  },

  userLike: function(status) {
    if (status) {
      return (
        <div>
          <span className="glyphicon glyphicon-heart icon-footer" aria-hidden="true"></span> {this.props.articleLikes.length}
        </div>
      )
    } else {
      return (
        <div>
          <span className="glyphicon glyphicon-heart-empty icon-footer" aria-hidden="true"></span> {this.props.articleLikes.length}
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

var ArticleComments = React.createClass({
  getInitialState: function() {
    return {
      sharedCommentsBoxStatus: this.props.sharedCommentsBoxStatus
    }
  },

  response: function(commentsLength) {
    if (commentsLength > 1) {
      return (
        <div>
          {commentsLength} responses <span className="glyphicon glyphicon-comment icon-footer" onClick={this.toggleCommentsBoxStatus} aria-hidden="true"></span>
        </div>
      )
    } else {
      return (
        <div>
          {commentsLength} response <span className="glyphicon glyphicon-comment icon-footer" onClick={this.toggleCommentsBoxStatus} aria-hidden="true"></span>
        </div>
      )
    }
  },

  toggleCommentsBoxStatus: function() {
    this.setState({ sharedCommentsBoxStatus: !this.state.sharedCommentsBoxStatus })
    // console.log(this.state.sharedCommentsBoxStatus);
    this.props.handleSharedCommentsBoxStatus(this.state.sharedCommentsBoxStatus)
  },

  render: function() {
    // console.log('commentsBoxStatus', this.state.sharedCommentsBoxStatus);
    var comments = this.props.comments.length;
    return (
      <div className='col-md-6 col-sm-6 col-xs-6'>
        {this.response(comments)}
      </div>
    )
  }
});

var ArticleCommentsBox = React.createClass({
  getInitialState: function() {
    return {
      sharedCommentsBoxStatus: this.props.sharedCommentsBoxStatus,
      articleComments: this.props.comments,
      newComment: ''
    }
  },

  // receive update on the change in parent status
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.sharedCommentsBoxStatus !== this.props.sharedCommentsBoxStatus) {
      this.setState({ sharedCommentsBoxStatus: nextProps.sharedCommentsBoxStatus });
    }
  },

  showCommentsBox: function(status) {
    var result = this.state.articleComments.map(function(comment) {
      var userName = comment.userName
      var userNameComment = comment.content
      return (
        <div key={comment.id} className='col-md-12 col-sm-12 col-xs-12'>
          <p>{userName} says:</p>
          <p>{userNameComment}</p>
        </div>
      )
    });

    if (status) {
      return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
          {result}
          <form onSubmit={this.handleNewCommentSubmit}>
            <input className='form-input remove-glow' type='text' name='comment' placeholder='Write a comment...' value={this.state.newComment} onChange={this.handleNewCommentChange}></input>
          </form>
      </div>
      )
    }
  },

  handleNewCommentChange: function(event) {
    this.setState({ newComment: event.target.value })
  },

  handleNewCommentSubmit: function(event) {
    event.preventDefault();
  },

  render: function() {
    // console.log('ArticleComments box status', this.state.sharedCommentsBoxStatus);
    var comments = this.props.comments.length;
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        {this.showCommentsBox(this.state.sharedCommentsBoxStatus)}
      </div>
    )
  }
});
