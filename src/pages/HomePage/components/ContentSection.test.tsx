import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContentSection from './ContentSection';

describe('ContentSection', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    moreText: 'This is more text.',
    date: '01.01.2024',
    category: 'Category Test',
  };

  test('should render all props', () => {
    render(<ContentSection {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.category)).toBeInTheDocument();
  });

  test('should not show moreText at the initial stage', () => {
    render(<ContentSection {...defaultProps} />);

    expect(screen.queryByText(defaultProps.moreText)).not.toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  test('should show moreText after clicking the "Read" button', () => {
    render(<ContentSection {...defaultProps} />);

    fireEvent.click(screen.getByText('Read'));

    expect(screen.getByText(defaultProps.moreText)).toBeInTheDocument();
    expect(screen.queryByText('...')).not.toBeInTheDocument();
  });

  test('should hide moreText again after pressing the "Collapse" button', () => {
    render(<ContentSection {...defaultProps} />);

    fireEvent.click(screen.getByText('Read'));
    fireEvent.click(screen.getByText('Collapse'));

    expect(screen.queryByText(defaultProps.moreText)).not.toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  test('should have the correct text on the button depending on the state', () => {
    render(<ContentSection {...defaultProps} />);

    expect(screen.getByText('Read')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Read'));
    expect(screen.getByText('Collapse')).toBeInTheDocument();
  });
});
