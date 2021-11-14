import React, { Component } from "react";
import NewsCard from "../../components/news/NewsCard";
import './News.css'

class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        const apiUrl =
            "https://newsapi.org/v2/top-headlines?country=id&apiKey=63776d05d7374eea9f0e441a573b30a8";

        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="news-page">
                <h1 className="text-center title"> News Headlines</h1><div className="container">
                    <div className="row">{this.state.news.map((item) => (
                        <NewsCard key={item.url} item={item} />
                    ))}
                    </div>;
                </div>
            </div>
        )
    }
}

export default Headlines;