var UserName = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      isUsername: false
    }
  },

  showUsernameInput: function(status) {
    if(status) {
      return (
        <p>
          {this.state.username}
        </p>
      )
    } else {
      return (
        <form onSubmit={this.handleUsernameForm}>
          Username:
          <input type='text' name='username' place='Username' className='form-input remove-glow' value={this.state.username} onChange={this.handleUsernameChange}></input>
          <div className='button inline-block' onClick={this.handleUsernameForm}>
            SUBMIT
          </div>
        </form>
      )
    }
  },

  handleUsernameChange: function(event) {
    this.setState({ username: event.target.value })
  },

  handleUsernameForm: function(event) {
    event.preventDefault();
    this.setState({ isUsername: true });
  },

  render: function() {
    return (
      <div className='col-md-12 col-sm-12 col-xs-12 align-right'>
        {this.showUsernameInput(this.state.isUsername)}
      </div>
    )
  }
});
