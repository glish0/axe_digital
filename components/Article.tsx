import Image from 'next/image';
import React from 'react';
type ArticleProps = {
  imgUrl: any, date: string, text: string
}

const Article = ({ imgUrl, date, text } : ArticleProps) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <Image src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
