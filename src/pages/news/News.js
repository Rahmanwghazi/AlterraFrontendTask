import { useEffect, useState } from "react";
import NewsCard from "../../components/news/NewsCard";
import axios from "axios";
import './News.css'

const Headlines = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const apiUrl =  "https://newsapi.org/v2/top-headlines?country=id&apiKey=63776d05d7374eea9f0e441a573b30a8"

    useEffect(() => {
        const handleFetchData = async () => {
            try {
                const data = await axios.get(apiUrl);
                setNews(data.data.articles);
            } catch (error) {
                setError(error);
            }
        }
        handleFetchData();
    }, []);
    return (
        <div className="news-page">
            <h1 className="text-center title"> News Headlines</h1><div className="container">
                <div className="row">{news.map((item) => (
                    <NewsCard key={item.url} item={item} />
                ))}
                </div>;
            </div>
        </div>
    )
}

export default Headlines;