var socket = io(window.location.host);
console.log(socket);

var Article = React.createClass({

  componentWillMount: function() {
    // set up connect before component is rendered

  },

  render: function() {
    // console.log(this.props.user);
    return (
      <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 article-box container'>
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
      <div className='col-md-12 col-sm-12 col-xs-12 header-div'>
        <div className='col-md-1 col-sm-1 col-xs-2'>
          <img className='header-icon' src= {this.props.avatarUrl} />
        </div>
        <div className='col-md-11 col-sm-11 col-xs-10 header-user'>
          <div className='col-md-12 col-sm-12 col-xs-12 green'>
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
        <span className='article-title'>{title}</span>
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
        <a className='content-shortener-link' onClick={this.viewFullArticle}>View Less</a>
      )
    } else if (text.length > 500 && !expanded) {
      return (
        <a className='content-shortener-link' onClick={this.viewFullArticle}>View More</a>
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
        <p className='content-shortener-para'>
          {this.view(content, this.state.expanded)}
        </p>
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
        this.setState({ comments: dataFromServer[1] });
        // console.log(dataFromServer);
        // console.log(dataFromServer.articleLikes);
        // BUG SEEMS TO BE HERE. IT COMES AND GO. NEED HELP
        // console.log(dataFromServer.articleLikes.length);
        // this.setState({ articleLikes: dataFromServer.articleLikes });
        // this.setState({ comments: dataFromServer.comments });
      }.bind(this),
    });

    // start listening for any incoming sockets when component is rendered
    // but is this the correct place to put it?
    {this.socketListeners(socket)}
  },

  // list of socket listeners
  socketListeners: function(socket) {
    socket.on('new comment', this.receiveNewComment);
  },

  receiveNewComment: function(data, articleId) {
    // check if new comment belongs to individual article
    // if true then push into this.state.commends array
    if (articleId === this.props.articleId) {
      var userName;
      if (data.userName === '') {
        userName = 'Anonymous';
      } else {
        userName = data.userName;
      }

      var newComment = {
        id: this.state.comments.length + 1,
        content: data.content,
        userName: userName,
        articleId: articleId
      };

      // push new comment into this.state.comments
      var addedCommentList = this.state.comments;
      addedCommentList.push(newComment);
      this.setState({ comments: addedCommentList });
    }

  },

  handleSharedCommentsBoxStatus: function(status) {
    // console.log('did you appear ArticleFooter component?');
    this.setState({ sharedCommentsBoxStatus: status })
  },

  handleCommentCreate: function(data, articleId) {
    $.ajax({
      url: '/articles/' + articleId + '/comments',
      method: 'POST',
      data: data,
      success: function(dataFromServer) {
        var commentsList = this.state.comments;
        // push so latest comment appears at the bottom
        // note that comments should be in ASC order
        commentsList.push(dataFromServer);
        this.setState({ comments: commentsList });
      }.bind(this),
    });

    // send new comment to socket
    socket.emit('new comment', data, this.props.articleId);
  },

  render: function() {
    // console.log('footer component sharedCommentsBoxStatus', this.state.sharedCommentsBoxStatus );
    return (
      <div>
        <div className='col-md-12 col-sm-12 col-xs-12'>
          <ArticleLikes
            articleLikes={this.state.articleLikes}
            sharedUsernameVariable={this.props.sharedUsernameVariable}
          />
          <ArticleComments
            comments={this.state.comments}
            sharedCommentsBoxStatus={this.state.sharedCommentsBoxStatus}
            handleSharedCommentsBoxStatus={this.handleSharedCommentsBoxStatus}
          />
        </div>
        <div>
          <ArticleCommentsBox
            sharedUsernameVariable={this.props.sharedUsernameVariable}
            sharedCommentsBoxStatus={this.state.sharedCommentsBoxStatus}
            comments={this.state.comments}
            handleCommentCreate={this.handleCommentCreate}
            articleId={this.props.articleId}
          />
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
  // use componentWillReceiveProps when change in the state in sibling causes a re-render on its sibling component
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
          <span className="glyphicon glyphicon-heart icon-footer" aria-hidden="true"></span> <span className='grey'>{this.props.articleLikes.length}</span>
        </div>
      )
    } else {
      return (
        <div>
          <span className="glyphicon glyphicon-heart-empty icon-footer" aria-hidden="true"></span> <span className='grey'>{this.props.articleLikes.length}</span>
        </div>
      )
    }
  },

  render: function() {
    return (
      <div className='col-md-6 col-sm-6 col-xs-6 icon-heart-div'>
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
          <span className='grey'>{commentsLength} responses</span> <span className="glyphicon glyphicon-comment icon-footer" onClick={this.toggleCommentsBoxStatus} aria-hidden="true"></span>
        </div>
      )
    } else {
      return (
        <div>
          <span className='grey'>{commentsLength} response</span> <span className="glyphicon glyphicon-comment icon-footer" onClick={this.toggleCommentsBoxStatus} aria-hidden="true"></span>
        </div>
      )
    }
  },

  toggleCommentsBoxStatus: function() {
    this.setState({ sharedCommentsBoxStatus: !this.state.sharedCommentsBoxStatus })
    this.props.handleSharedCommentsBoxStatus(this.state.sharedCommentsBoxStatus)
  },

  render: function() {
    var comments = this.props.comments.length;
    return (
      <div className='col-md-6 col-sm-6 col-xs-6 response-icon-div'>
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
    var commentBoxDiv;
    var inputBoxDiv;
    var result = this.props.comments.map(function(comment, index) {
      var userName = comment.userName
      var userNameComment = comment.content
      commentBoxDiv = 'commentBoxDiv' + comment.id,
      inputBoxDiv = 'inputBoxDiv' + comment.id
      if (index % 2 === 0) {
        return (
          <div key={commentBoxDiv} className='col-md-12 col-sm-12 col-xs-12 comment-box-even'>
            <p>{userName} says:</p>
            <p>{userNameComment}</p>
          </div>
        )
      } else {
        return (
          <div key={commentBoxDiv} className='col-md-12 col-sm-12 col-xs-12 comment-box-odd'>
            <p>{userName} says:</p>
            <p>{userNameComment}</p>
          </div>
        )
      }
    }.bind(this));

    if (status) {
      return (
        <div key={inputBoxDiv} className='col-md-12 col-sm-12 col-xs-12 new-comment-div'>
          {result}
          <form id='newCommentForm' onSubmit={this.handleNewCommentSubmit}>
            <input className='form-input comment-form-input remove-glow' type='text' name='comment' placeholder='Write a comment...' value={this.state.newComment} onChange={this.handleNewCommentChange}></input>
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
    // reset input back to empty
    this.setState({ newComment: '' });
    var data = {
      userName: this.props.sharedUsernameVariable,
      content: this.state.newComment
    };
    this.props.handleCommentCreate(data, this.props.articleId);
  },

  render: function() {
    var comments = this.props.comments.length;
    return (
      <div key={this.props.articleId} className='col-md-12 col-sm-12 col-xs-12 comments-main-box'>
        {this.showCommentsBox(this.state.sharedCommentsBoxStatus)}
      </div>
    )
  }
});
