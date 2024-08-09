import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchContext } from '../../components/SearchContext/SearchContext';
import ArticlePage from './ArticlePage';
import { readingItems, articleContent  } from '../../data/contentData';


jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);

describe('ArticlePage', () => {
  const renderWithProviders = (searchQuery = '') => {
    const setSearchQuery = jest.fn();
    
      render(
        <MemoryRouter>
          <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            <ArticlePage />
          </SearchContext.Provider>
        </MemoryRouter>
    );
  };

  test('should  renders header', () => {
    renderWithProviders();
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

    

  test('should renders article content', () => {
    renderWithProviders();


      articleContent.forEach((article) => {
  
          const titleElements = screen.getAllByText(article.title);
          expect(titleElements.length).toBe(1);  

  
          const dateElements = screen.getAllByText(article.date);
          expect(dateElements.length).toBe(5); 

  
          const categoryElements = screen.getAllByText(article.category);
          expect(categoryElements.length).toBe(1);  


          article.content.slice(0, 2).forEach((paragraph) => {
          const paragraphElements = screen.getAllByText(paragraph);
          expect(paragraphElements.length).toBeGreaterThan(0); 
      });
    });

    expect(screen.getByAltText('article-baner')).toBeInTheDocument();
  });


  test('should filters reading items based on search query', () => {
    renderWithProviders('react');
      const filteredItems = readingItems.filter((item) =>
        item.title.toLowerCase().includes('react')
      );
      filteredItems.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      });
      const nonFilteredItems = readingItems.filter((item) =>
        !item.title.toLowerCase().includes('react')
      );
      nonFilteredItems.forEach((item) => {
        expect(screen.queryByText(item.title)).not.toBeInTheDocument();
    });
  });

  test('should renders "Comment text" label in the discussion form', () => {
    renderWithProviders();
    expect(screen.getByLabelText('Comment text')).toBeInTheDocument();
  })

  test('should allow users to submit a comment and display it in the list', () => {
    renderWithProviders();
    const inputField = screen.getByPlaceholderText('Comment text');
    const sendButton = screen.getByText('Send');

    // Add a comment
    fireEvent.change(inputField, { target: { value: 'This is a test comment' } });
    fireEvent.click(sendButton);

    // Check if the comment appears in the list
    expect(screen.getByText('This is a test comment')).toBeInTheDocument();
  });

  test('should allow users to select and delete comments', () => {
    renderWithProviders();

    const inputField = screen.getByPlaceholderText('Comment text');
    const sendButton = screen.getByText('Send');

    // Add multiple comments
    fireEvent.change(inputField, { target: { value: 'First comment' } });
    fireEvent.click(sendButton);
    fireEvent.change(inputField, { target: { value: 'Second comment' } });
    fireEvent.click(sendButton);

    // Check if both comments appear in the list
    expect(screen.getByText('First comment')).toBeInTheDocument();
    expect(screen.getByText('Second comment')).toBeInTheDocument();

    // Select the first comment
    const firstCommentCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstCommentCheckbox);

    // Click the delete button
    const deleteButton = screen.getByText('Delete comments');
    fireEvent.click(deleteButton);

    // Check if the first comment is deleted
    expect(screen.queryByText('First comment')).not.toBeInTheDocument();
    // Check if the second comment is still there
    expect(screen.getByText('Second comment')).toBeInTheDocument();
  });

    
})



