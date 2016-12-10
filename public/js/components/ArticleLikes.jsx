var ArticlesLikes = React.createClass({
  getInitialState: function() {
    return {
      likeStatus: false
    }
  },

  userLike: function(status) {
    if (status) {
      return (
        <span class="glyphicon glyphicon-heart green" aria-hidden="true"></span> &nbsp {this.props.articleLikes.length}
      )
    } else {
      return (
        <span class="glyphicon glyphicon-heart-empty green" aria-hidden="true"></span> &nbsp {this.props.articleLikes.length}
      )
    }
  }

  // // ajax to get number of likes and comments of each particular article
  // componentWillMount: function() {
  //   $.ajax({
  //     url: "/articles" + this.props.articleId,
  //     method: "GET",
  //     success: function(dataFromServer) {
  //       this.setState({articleLikes: dataFromServer[0]});
  //       for (var i = 0; i < dataFromServer[0].length; i++) {
  //         if (dataFromServer[i].userId === this.props.user.id) {
  //           this.setState({likeStatus: true});
  //         }
  //       }
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error("/articles", status, err.toString());
  //     }.bind(this)
  //   });
  // },

  render: function() {
    var articleLikes = this.props.articleLikes;
    for (var i = 0; i < articleLikes.length; i++) {
      if (articleLikes[i].userId === this.props.user.id) {
        this.setState({likeStatus: true});
      }
    }
    return {
      <div className='col-md-6 col-sm-6 col-xs-6'>
        {this.userLike(this.state.likeStatus)}
      </div>
    }
  }
});
