import React, { useState } from 'react';
// Dummy articles data
const articles = [
    {
        id: 1,
        title: 'Our Mission',
        content: 'We strive to deliver the best consultancy services globally.',
    },
    {
        id: 2,
        title: 'Our Team',
        content: 'Our team consists of experienced professionals from various industries.',
    },
    {
        id: 3,
        title: 'Our Values',
        content: 'Integrity, innovation, and customer satisfaction are our core values.',
    },
    {
        id: 4,
        title: 'Our History',
        content: 'Founded in 2010, we have grown to serve clients worldwide.',
    },
    {
        id: 5,
        title: 'Contact Us',
        content: 'Reach out to us for tailored consultancy solutions.',
    },
    // Add more articles as needed
];

const ARTICLES_PER_PAGE = 2;

const Article = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIdx = (currentPage - 1) * ARTICLES_PER_PAGE;
    const currentArticles = articles.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

    return (
        <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
            <h1>About Us Articles</h1>
            {currentArticles.map(article => (
                <div key={article.id} style={{ marginBottom: 32 }}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
            <div style={{ display: 'flex', gap: 8 }}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx + 1}
                        onClick={() => handlePageChange(idx + 1)}
                        style={{
                            fontWeight: currentPage === idx + 1 ? 'bold' : 'normal',
                        }}
                    >
                        {idx + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Article;