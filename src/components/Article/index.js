import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getArticleData,
  handleArticleLikes,
  clearArticleData
} from "../../store/actions";
import LikesCounter from "./likes";

class Article extends Component {
  componentDidMount() {
    this.props.dispatch(getArticleData(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearArticleData());
  }

  addLike = action => {
    const id = this.props.match.params.id;
    const data = this.props.articles.articleData[0];

    const likes = data.likes[0];
    const dislikes = data.likes[1];
    console.log(action);

    const newLikes =
      action === "ADD" ? [likes + 1, dislikes] : [likes, dislikes + 1];

    this.props.dispatch(handleArticleLikes(newLikes, id));
  };

  renderNews = ({ articleData }) =>
    articleData ? (
      <div>
        <div className="tags">
          <span>
            <i className="fa fa-eye">{articleData[0].views}</i>
          </span>
          <span>
            <i className="fa fa-thumbs-up">{articleData[0].likes[0]}</i>
          </span>
          <span>
            <i className="fa fa-thumbs-down">{articleData[0].likes[1]}</i>
          </span>
        </div>
        <div className="top">
          <h2>{articleData[0].title}</h2>
          <span>Article by: {articleData[0].author}</span>
        </div>
        <img
          alt={articleData[0].title}
          src={`/images/articles/${articleData[0].img}`}
        />
        <div className="body_news">{articleData[0].body}</div>
        <div>
          <LikesCounter
            addLike={args => this.addLike(args)}
            likes={articleData[0].likes[0]}
            dislikes={articleData[0].likes[1]}
          />
        </div>
      </div>
    ) : null;

  render() {
    console.log(this.props);
    return (
      <div className="news_container">
        {this.renderNews(this.props.articles)}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStatetoProps)(Article);
