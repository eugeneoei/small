var NavBarLogIn = React.createClass({
  getInitialState: function() {
    return {
      logInForm: true,
    }
  },

  toggleLogInFormState: function(status) {
    if (status) {
      // call function to change state of authDiv in parent nav bar component
      this.props.subToggleAuthDivState(status)
      this.setState({ logInForm: false})
    } else {
      this.props.subToggleAuthDivState(status)
      this.setState({ logInForm: true})
    }
  },

  showLogInForm: function(status) {
    if (status) {
      return (
        <form onSubmit={this.handleLogInSubmit}>
          Email:
          <input className='form-input remove-glow' type='text' name='email' placeholder='Your Email'></input>
          Password:
          <input className='form-input remove-glow' type='password' name='password' placeholder='Your Password'></input>
          <button className='remove-glow' type='submit'>Log In</button>
          <div className='button navbar-back' onClick={this.toggleLogInFormState(this.state.logInForm)}>BACK</div>
        </form>
      )
    }
  },

  handleLogInSubmit: function() {

  },


  render: function() {
    return (
      <div className='col-md-12 col-sm-12 col-xs-12'>
        {this.showLogInForm(this.state.logInForm)}
      </div>
    )
  }
});
