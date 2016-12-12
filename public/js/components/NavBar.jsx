var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header col-md-12">
            <div className='col-md-4 col-sm-4 col-xs-4'>
              SMALL - the new Medium
            </div>
            <div className='col-md-8 col-sm-8 col-xs-8 slign-right'>
              <UserName />
            </div>
          </div>
        </div>
      </nav>
    )
  }
});
