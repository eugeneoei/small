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
          {this.props.sharedUsernameVariable}
        </p>
      )
    } else {
      return (
        <form onSubmit={this.handleUsernameForm}>
          <span className='margin-right-10'>Username:</span>
          <input type='text' name='username' placeholder='Username' className='form-input remove-glow margin-right-10' value={this.state.username} onChange={this.handleUsernameChange}></input>
          <div className='button inline-block' onClick={this.handleUsernameForm}>
            SUBMIT
          </div>
        </form>
      )
    }
  },

  handleUsernameChange: function(event) {
    this.setState({ username: event.target.value });

  },

  handleUsernameForm: function(event) {
    event.preventDefault();
    this.setState({ isUsername: true });
    this.setState({ username: '' });
    // console.log(this.state.username);
    // handleSharedUsernameVariable is a function passed from parent component IndexPage
    this.props.handleSharedUsernameVariable(this.state.username);
    // console.log(this.state.username);
  },

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header col-md-12">
            <div className='col-md-6 col-sm-2 col-xs-1'>
              <img id='logo' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIng_VsjCqDGnEhgYh2mTjghE_t1Bi1EykOtXQLk2bpwBAeYnI'></img>
              <span className='logo-title hidden-sm hidden-xs'>SMALL - THE NEW MEDIUM</span>
            </div>
            <div className='col-md-6 col-sm-10 col-xs-11'>
              <div className='col-md-12 col-sm-12 col-xs-12 align-right '>
                {this.showUsernameInput(this.state.isUsername)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
});
