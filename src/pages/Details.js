// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Details() {
  // const news = useSelector((state) => state.news.article);
  const { title } = useParams();

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}
