var Article = React.createClass({
  render: function() {
    return {
      <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12'>
        <ArticleHeader avatarUrl={this.props.article.avatarUrl} userName={this.props.article.userName} createdAt={this.props.article.createdAt} />
        <ArticleTitle title={this.props.article.title} />
        <ArticleContent content={this.props.article.content} />
        <ArticleFooter articleId={this.props.article.id} user={this.props.user}/>
      </div>
    }
  }
});
