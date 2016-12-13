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
          <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 login'>
            <span className='article-form-label'>TITLE:</span>
            <input className='form-input remove-glow article-form-input' type='text' name='title' placeholder='Title' value={this.state.articleTitle} onChange={this.handleArticleTitleChange}></input>
            <span className='article-form-label'>Content:</span>
            <textarea className='form-input remove-glow article-form-input' type='text' name='content' placeholder='Content' value={this.state.articleContent} onChange={this.handleArticleContentChange} />
            <div className='button button-create-article' onClick={this.handleCreateArticleForm}>SUBMIT</div>
          </div>
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
