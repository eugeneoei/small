var ArticleHeader = React.createClass({
  render: function() {
    var avatarUrl = this.props.avatarUrl;
    var userName = this.props.userName;
    // need to calculate time difference here;
    var days = 2;
    return {
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <div className='col-md-2 col-sm-2 col-xs-3'>
          <img src={avatarUrl} />
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
    }
  }
});
