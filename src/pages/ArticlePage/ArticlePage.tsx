import React, { useState }  from 'react';
import './articlePage.scss';
import Header from '../../components/Header/Header';
import { useSearch } from '../../components/SearchContext/SearchContext';
import { readingItems, ReadingItemProps, articleContent } from '../../data/contentData';
import ArticleBaner from '../../assets/images/article-baner.jpg'

interface Comment {
  id: number;
  text: string;
}

  const ArticleReading: React.FC = () => {
  const { searchQuery } = useSearch();

  const filteredItems = readingItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="article-reading">
      <div className="title">It is interesting to read</div>
      <div className="row">
        {filteredItems.map((item, index) => (
          <ReadingItem key={index} title={item.title} date={item.date} link={item.link} />
        ))}
      </div>
      <DiscussionForm />
    </div>
  );
};

const ReadingItem: React.FC<ReadingItemProps> = ({ title, date, link }) => {
  return (
    <div className="col-md-6">
      <a className="subtitle scrollto" href={link}>
        {title}
      </a>
      <div className="secondary-subtitle">{date}</div>
    </div>
  );
};

const DiscussionForm: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [selectedComments, setSelectedComments] = useState<number[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleSend = () => {
    if (commentText.trim()) {
      setComments([...comments, { id: Date.now(), text: commentText }]);
      setCommentText('');
    }
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedComments((prev) =>
      prev.includes(id) ? prev.filter((commentId) => commentId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    setComments(comments.filter((comment) => !selectedComments.includes(comment.id)));
    setSelectedComments([]);
  };
  return (
    <>
      <div className="title">Discussion</div>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id}  className="comment-item">
            <input
              type="checkbox"
              checked={selectedComments.includes(comment.id)}
              onChange={() => handleCheckboxChange(comment.id)}
            />
            <span>{comment.text}</span>
          </div>
        ))}
        {selectedComments.length > 0 && (
        <button className="btn btn-primary mt-3" onClick={handleDeleteSelected} disabled={selectedComments.length === 0}>
          Delete comments
        </button>
      )}
      </div>

      
      <div className="form-floating">
        <input  type="text"
          className="form-control discussion-form"
          id="floatingInput"
          placeholder="Comment text"
          value={commentText}
          onChange={handleCommentChange}/>
        <label htmlFor="floatingInput">Comment text</label>
      </div>
      <button className="btn btn-wright" type="submit" onClick={handleSend}>
        Send
      </button>

    </>
  );
};



const ArticlePage: React.FC = () => {
  const { searchQuery } = useSearch();

  const highlightSearchQuery = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };
  return (
    <>
      <Header  />
      <section className="article">
        {articleContent.map((article, index) => (
          <div key={index} className="article__item">
            <div className="title">{article.title}</div>
            <div className="content-box__subtitle d-flex">
              <div className="secondary-subtitle">{article.date}</div>
              <div className="circle"></div>
              <div className="secondary-subtitle">{article.category}</div>
            </div>
            {article.content.slice(0, 2).map((paragraph, index) => (
              <div key={index} className="subtitle" dangerouslySetInnerHTML={{ __html: highlightSearchQuery(paragraph) }} />
            ))}
            <img src={ArticleBaner} alt="article-baner" className="img-fluid mb-4" />
            <div className="subtitle" dangerouslySetInnerHTML={{ __html: highlightSearchQuery(article.content[2]) }} />
            <ArticleReading />
          </div>
        ))}
      </section>
    </>
  );
};

export default ArticlePage;