var IndexPage = React.createClass({

  render: function() {
    console.log(this.props.currentUser);
    return (
      <div>
        <ArticlesContainer />
      </div>
    )
  }
});
