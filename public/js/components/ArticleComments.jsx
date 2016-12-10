var ArticlesComments = React.createClass({

  response: function(commentsLength) {
    if (commentsLength > 1) {
      return (
        <div>
          {commentsLength} responses &nbsp <span class="glyphicon glyphicon-comment green" aria-hidden="true"></span>
        </div>
      )
    } else {
      return (
        <div>
          {commentsLength} response &nbsp <span class="glyphicon glyphicon-comment green" aria-hidden="true"></span>
        </div>
      )
    }
  },

  render: function() {
    var comments = this.props.comments.length;
    return {
      <div className='col-md-6 col-sm-6 col-xs-6'>
        {this.response({comments})
      </div>
    }
  }
});
