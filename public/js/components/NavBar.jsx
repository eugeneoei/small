var NavBar = React.createClass({
  getInitialState: function() {
    return {
      // user : [],
      authDiv: true,
      isLoggedIn: false,
      logInForm: false,
      signUpForm: false
    }
  },

  showAuthDiv: function(status) {
    if (status) {
      return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
          <div className='col-md-2 col-md-offset-8 col-sm-6 col-xs-6 button' onClick={this.toggleLogInFormState}>
            LOG IN
          </div>
          <div className='col-md-2 col-sm-6 col-xs-6 button' onClick={this.toggleSignUpFormState}>
            SIGN UP
          </div>
        </div>
      )
    }
  },

  toggleLogInFormState: function() {
    if (this.state.logInForm) {
      this.setState({ authDiv: true})
      this.setState({ logInForm: false})
    } else {
      this.setState({ authDiv: false})
      this.setState({ logInForm: true})
    }
  },

  showLogInForm: function(status) {
    if (status) {
      return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
          <form>
            Email:
            <input className='form-input remove-glow' type='text' name='email' placeholder='Your Email'></input>
            Password:
            <input className='form-input remove-glow' type='password' name='password' placeholder='Your Password'></input>
            <div className='button navbar-back' onClick={this.toggleLogInFormState}>BACK</div>
          </form>
      </div>
      )
    }
  },

  toggleSignUpFormState: function() {
    if (this.state.signUpForm) {
      this.setState({ authDiv: true})
      this.setState({ signUpForm: false})
    } else {
      this.setState({ authDiv: false})
      this.setState({ signUpForm: true})
    }
  },

  showSignUpForm: function(status) {
    if (status) {
      return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
          <form>
            First Name:
            <input className='form-input remove-glow' type='text' name='firstName' placeholder='First Name'></input>
            Last Name:
            <input className='form-input remove-glow' type='text' name='lastName' placeholder='Last Name'></input>
            Email:
            <input className='form-input remove-glow' type='text' name='email' placeholder='Email'></input>
            Password:
            <input className='form-input remove-glow' type='password' name='password' placeholder='Password'></input>
            <div className='button navbar-back' onClick={this.toggleSignUpFormState}>BACK</div>
          </form>
        </div>
      )
    }
  },

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header col-md-12">
            <div className='col-md-4 col-sm-4 col-xs-4'>
              SMALL - the new Medium
            </div>
            <div className='col-md-8 col-sm-8 col-xs-8 auth-div'>
              {this.showAuthDiv(this.state.authDiv)}
              {this.showLogInForm(this.state.logInForm)}
              {this.showSignUpForm(this.state.signUpForm)}
            </div>
          </div>
        </div>
      </nav>
    )
  }
});
