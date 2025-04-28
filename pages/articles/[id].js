// Article Detail Page Placeholder
import { useRouter } from 'next/router';
import articles from '../../data/articles.json';

const ArticleDetail = () => {
  const { query } = useRouter();
  const { id } = query;

  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-4">By {article.author} | {article.date}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
