import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoBlog from './VideoBlog';

describe('VideoBlog', () => {
  test('should render a video banner', () => {
    render(<VideoBlog />);
    const videoBanner = screen.getByAltText('Video');
    expect(videoBanner).toBeInTheDocument();
  });

  test('should render the "leave a comment" button', () => {
    render(<VideoBlog />);
    const commentButton = screen.getByText('leave a comment');
    expect(commentButton).toBeInTheDocument();
  });

  test('should open the comments form when you click on the button', () => {
    render(<VideoBlog />);

    const commentButton = screen.getByText('leave a comment');
    fireEvent.click(commentButton);

    const nameInput = screen.getByLabelText('User Name');
    const descriptionTextarea = screen.getByLabelText('Commentary:');
    const submitButton = screen.getByText('Post a comment');

    expect(nameInput).toBeInTheDocument();
    expect(descriptionTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('should close the comment form after submission', () => {
    render(<VideoBlog />);

    const commentButton = screen.getByText('leave a comment');
    fireEvent.click(commentButton);

    const nameInput = screen.getByLabelText('User Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const descriptionTextarea = screen.getByLabelText('Commentary:');
    fireEvent.change(descriptionTextarea, { target: { value: 'Great video!' } });

    const submitButton = screen.getByText('Post a comment');
    fireEvent.click(submitButton);

    expect(screen.queryByLabelText('User Name')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Commentary:')).not.toBeInTheDocument();
  });

  test('should add a comment to the list after submitting the form', () => {
    render(<VideoBlog />);

    const commentButton = screen.getByText('leave a comment');
    fireEvent.click(commentButton);

    const nameInput = screen.getByLabelText('User Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const descriptionTextarea = screen.getByLabelText('Commentary:');
    fireEvent.change(descriptionTextarea, { target: { value: 'Great video!' } });

    const submitButton = screen.getByText('Post a comment');
    fireEvent.click(submitButton);

    const comment = screen.getByText('John Doe');
    expect(comment).toBeInTheDocument();

    const commentDescription = screen.getByText('Great video!');
    expect(commentDescription).toBeInTheDocument();
  });

  test('should display the number of comments', () => {
    render(<VideoBlog />);

    const commentButton = screen.getByText('leave a comment');
    fireEvent.click(commentButton);

    const nameInput = screen.getByLabelText('User Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const descriptionTextarea = screen.getByLabelText('Commentary:');
    fireEvent.change(descriptionTextarea, { target: { value: 'Great video!' } });

    const submitButton = screen.getByText('Post a comment');
    fireEvent.click(submitButton);

    const commentCount = screen.getByText('comments');
    expect(commentCount).toHaveTextContent('1');
  });

  test('should close the comment form when you click on the "leave a comment" button again', () => {
    render(<VideoBlog />);

    const commentButton = screen.getByText('leave a comment');
    fireEvent.click(commentButton);

    const nameInput = screen.getByLabelText('User Name');
    expect(nameInput).toBeInTheDocument();

    fireEvent.click(commentButton);

    expect(screen.queryByLabelText('User Name')).not.toBeInTheDocument();
  });
})