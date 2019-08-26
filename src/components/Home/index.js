import React, { Component } from "react";
import { connect } from "react-redux";
import { latestNews, otherNews } from "../../store/actions";
import LatestNews from "./latestNews";
import OtherNews from "./otherNews";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(latestNews());
    this.props.dispatch(otherNews());
  }

  render() {
    console.log(this.props);
    const articles = this.props.articles;
    return (
      <div>
        <LatestNews latest={articles.latest} />
        <OtherNews otherNews={articles.otherNews} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Home);
