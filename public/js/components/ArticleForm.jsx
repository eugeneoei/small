var ArticleForm = React.createClass({
  getInitialState: function() {
    return {
      createPostForm: false
    }
  },

  toggleCreatePostForm: function() {
    if (this.state.createPostForm) {
      this.setState({ createPostForm: false })
    } else {
      this.setState({ createPostForm: true })
    }
  },

  showForm: function(status) {
    if (status) {
      return (
        <form onSubmit={this.handleCreatePostForm}>
          <div className='center' onClick={this.toggleCreatePostForm}>
            <span className="glyphicon glyphicon-minus-sign icon" aria-hidden="true"></span>
          </div>
          TITLE:
          <input className='form-input remove-glow' type='text' name='title' placeholder='Title'></input>
          Content:
          <input className='form-input remove-glow' type='text' name='content' placeholder='Content'></input>
        </form>
      )
    } else {
      return (
        <div className='center'>
          <span className="glyphicon glyphicon-plus-sign icon" onClick={this.toggleCreatePostForm} aria-hidden="true"></span>
        </div>
      )
    }
  },

  handleCreatePostForm: function() {

  },

  render: function() {

    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        {this.showForm(this.state.createPostForm)}
      </div>
    )
  }
});
