// Article Detail Page Placeholder
import { useRouter } from 'next/router';

// Simulated data for articles (in a real-world app, you'd fetch this from an API or database)
const articles = [
  { id: '1', title: 'Introduction to React', content: 'React is a popular JavaScript library for building user interfaces.' },
  { id: '2', title: 'Understanding JavaScript', content: 'JavaScript is a versatile programming language used in web development.' },
  { id: '3', title: 'Next.js Basics', content: 'Next.js is a React framework that enables server-side rendering and static site generation.' },
  { id: '4', title: 'CSS Flexbox Guide', content: 'Flexbox is a layout module in CSS that helps you design complex layouts with ease.' },
];

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the article matching the ID
  const article = articles.find((article) => article.id === id);

  // If the article doesn't exist, show a "not found" message
  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
