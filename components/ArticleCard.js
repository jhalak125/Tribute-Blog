// ArticleCard Component Placeholder
import Link from 'next/link';

const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-6">
      <h2 className="font-bold text-xl mb-2">{article.title}</h2>
      <p className="text-gray-700 text-base">{article.excerpt}</p>
      <Link href={`/articles/${article.id}`}>
        <a className="text-blue-500 hover:text-blue-700">Read more</a>
      </Link>
    </div>
  );
};

export default ArticleCard;
