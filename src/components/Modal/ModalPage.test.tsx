import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './ModalPage';

describe('Modal Component', () => {
  test('renders modal when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText('Enter a name')).toBeInTheDocument();
  });

  test('does not render modal when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText('Enter a name')).not.toBeInTheDocument();
  });

  test('handles input changes correctly', () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    
    fireEvent.change(screen.getByPlaceholderText('name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('name@example.com'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('text'), { target: { value: 'Hello World!' } });

    expect(screen.getByPlaceholderText('name')).toHaveValue('John Doe');
    expect(screen.getByPlaceholderText('name@example.com')).toHaveValue('john@example.com');
    expect(screen.getByPlaceholderText('text')).toHaveValue('Hello World!');
  });

  test('validates form fields and shows errors', () => {
    render(<Modal isOpen={true} onClose={() => {}} />);

    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  test('clears form and calls onClose after successful submission', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose} />);

    fireEvent.change(screen.getByPlaceholderText('name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('name@example.com'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('text'), { target: { value: 'Hello World!' } });
    
    fireEvent.click(screen.getByText('Submit'));

    // Check if form was cleared
    expect(screen.getByPlaceholderText('name')).toHaveValue('');
    expect(screen.getByPlaceholderText('name@example.com')).toHaveValue('');
    expect(screen.getByPlaceholderText('text')).toHaveValue('');

    // Check if onClose was called
    expect(handleClose).toHaveBeenCalled();
  });
});
