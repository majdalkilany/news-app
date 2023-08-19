import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../redux/newsThunk';

import './details.css';

export default function Details() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.allData);
  useEffect(() => {
    if (news.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch, news.length]);
  const { title } = useParams();
  const article = news.filter((item) => item.title === title);
  const newArticle = article[0];
  const newDate = new Date(newArticle.publishedAt);
  const formattedDateTime = newDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',

  });
  return (
    <div className="table-container">
      <img src={newArticle.urlToImage} alt={newArticle.title} className="img-article-details" />
      <div>
        <h4>{newArticle.title}</h4>
        <ul className="article-details">
          <li className="article-item">
            <span>

              wrote by:
            </span>
            <span>

              {newArticle.author}
            </span>
          </li>
          <li className="article-item">
            <span>

              published At:
            </span>
            <span>

              {formattedDateTime}
            </span>
          </li>
          <li className="article-item">
            <span>

              Source Name:
            </span>
            <span>

              {newArticle.source.name}
            </span>
          </li>
          <li className="article-item description">
            <span className="span-title">

              description:
            </span>
            <br />
            <span>

              {newArticle.description}
            </span>

          </li>
        </ul>

      </div>
    </div>
  );
}
