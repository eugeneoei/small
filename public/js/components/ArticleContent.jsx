var ArticleContent = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    }
  },

  // toggle length of content shown
  contentShortener: function(text, expanded){
    if(expanded){
      return text
    }
    else {
      if (text.length < 100) {
        return text
      }
      else {
        return text.slice(0,100) + " ...."
      }
    }
  },

  // toggle to show view more/less
  view: function(expanded) {
    if(expanded){
      return (
        <a onClick={this.viewFullArticle}>view less</a>
      )
    }
    else{
      return (
        <a onClick={this.viewFullArticle}>view more</a>
      )
    }
  },

  viewFullArticle: function() {
    // this function changes the state of the expanded key from true to false
    // and vice versa upon click of view more/less
    if(this.state.expanded){
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
  },

  render: function() {
    var content = this.props.content;
    return {
      <div className='col-md-12 col-sm-12 col-xs-12'>
        <p>{this.contentShortener({content}, this.state.expanded)}</p>
        {this.view(this.state.expanded)}
      </div>
    }
  }
});
