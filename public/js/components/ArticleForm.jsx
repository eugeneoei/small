var ArticleForm = React.createClass({
  getInitialState: function() {
    return {
      // username: this.props.sharedUsernameVariable,
      createArticleForm: false,
      articleTitle: '',
      articleContent: ''
    }
  },

  toggleCreateArticleForm: function() {
    if (this.state.createArticleForm) {
      this.setState({ createArticleForm: false })
    } else {
      this.setState({ createArticleForm: true })
    }
  },

  showForm: function(status) {
    if (status) {
      return (
        <form onSubmit={this.handleCreateArticleForm}>
          <div className='center'>
            <span className="glyphicon glyphicon-minus-sign icon" onClick={this.toggleCreateArticleForm} aria-hidden="true"></span>
          </div>
          TITLE:
          <input className='form-input remove-glow' type='text' name='title' placeholder='Title' value={this.state.articleTitle} onChange={this.handleArticleTitleChange}></input>
          Content:
          <input className='form-input remove-glow' type='text' name='content' placeholder='Content' value={this.state.articleContent} onChange={this.handleArticleContentChange}></input>
          <div className='button' onClick={this.handleCreateArticleForm}>Submit</div>
        </form>
      )
    } else {
      return (
        <div className='center'>
          <span className="glyphicon glyphicon-plus-sign icon" onClick={this.toggleCreateArticleForm} aria-hidden="true"></span>
        </div>
      )
    }
  },

  handleArticleTitleChange: function(event) {
    this.setState({ articleTitle: event.target.value });
  },

  handleArticleContentChange: function(event) {
    this.setState({ articleContent: event.target.value });
  },

  handleCreateArticleForm: function(event) {
    event.preventDefault();
    this.props.articleCreate({
      title: this.state.articleTitle,
      content: this.state.articleContent,
      userName: this.props.sharedUsernameVariable
    });
    this.setState({ createArticleForm: false });
    this.setState({ articleTitle: '' });
    this.setState({ articleContent: '' });
  },

  render: function() {

    return (
      <div className='col-md-12 col-sm-12 col-xs-12 center'>
        {this.showForm(this.state.createArticleForm)}
      </div>
    )
  }
});
