var NavBar = React.createClass({
  getInitialState: function() {
    return {
      username: this.props.sharedUsernameVariable,
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
          <input type='text' name='username' placeholder='Username' className='form-input remove-glow' value={this.state.username} onChange={this.handleUsernameChange}></input>
          <div className='button inline-block' onClick={this.handleUsernameForm}>
            SUBMIT
          </div>
        </form>
      )
    }
  },

  handleUsernameChange: function(event) {
    this.setState({ username: event.target.value });
    // handleSharedUsernameVariable is a function passed from parent component IndexPage
    this.props.handleSharedUsernameVariable(event.target.value);
  },

  handleUsernameForm: function(event) {
    event.preventDefault();
    this.setState({ isUsername: true });
  },

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header col-md-12">
            <div className='col-md-4 col-sm-4 col-xs-4'>
              SMALL - the new Medium
            </div>
            <div className='col-md-8 col-sm-8 col-xs-8'>
              <div className='col-md-12 col-sm-12 col-xs-12 align-right'>
                {this.showUsernameInput(this.state.isUsername)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
});
