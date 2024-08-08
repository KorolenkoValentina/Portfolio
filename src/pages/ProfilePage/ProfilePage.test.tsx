import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SearchContext } from '../../components/SearchContext/SearchContext';


jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);

  
  
  describe('ProfilePage', () => {

    const renderWithProvider = (searchQuery = '') => {
        const setSearchQuery = jest.fn();
    
        render(
          <MemoryRouter>
            <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
              <ProfilePage />
            </SearchContext.Provider>
          </MemoryRouter>
        );
    };
  
    test('renders header', () => {
        renderWithProvider();
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });
    test('should render form and all elements', () => {
        renderWithProvider();
    
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByLabelText('Enter a name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email address')).toBeInTheDocument();
        expect(screen.getByLabelText('New password')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm password')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
        expect(screen.getByText('choose an avatar')).toBeInTheDocument();
    });
    test('should update form state on input change', () => {
        renderWithProvider();
    
        userEvent.type(screen.getByLabelText('Enter a name'), 'John Doe');
        userEvent.type(screen.getByLabelText('Email address'), 'john.doe@example.com');
        userEvent.type(screen.getByLabelText('New password'), 'newpassword');
        userEvent.type(screen.getByLabelText('Confirm password'), 'newpassword');
    
        expect(screen.getByLabelText('Enter a name')).toHaveValue('John Doe');
        expect(screen.getByLabelText('Email address')).toHaveValue('john.doe@example.com');
        expect(screen.getByLabelText('New password')).toHaveValue('newpassword');
        expect(screen.getByLabelText('Confirm password')).toHaveValue('newpassword');
    });
    test('should fill form with default values initially', () => {
        renderWithProvider();
    
        expect(screen.getByLabelText('Enter a name')).toHaveValue('');
        expect(screen.getByLabelText('Email address')).toHaveValue('');
        expect(screen.getByLabelText('New password')).toHaveValue('');
        expect(screen.getByLabelText('Confirm password')).toHaveValue('');
    });

    test('should reduce the image size to 300x300 pixels when uploading a large file', () => {
        renderWithProvider();
    
        const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
    
        const inputFile = screen.getByTestId('fileInput');
        fireEvent.change(inputFile, { target: { files: [file] } });
    
        const avatarImage = screen.getByAltText('avatar') as HTMLImageElement;
        expect(avatarImage.width).toBeLessThanOrEqual(300);
        expect(avatarImage.height).toBeLessThanOrEqual(300);
    });

    test('should handle the submission of the form when clicking on the Submit button', () => {
       
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
        renderWithProvider();
    
     
        fireEvent.change(screen.getByPlaceholderText('Enter a name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText('name@example.com'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('New password'), { target: { value: 'newpassword123' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm password'), { target: { value: 'newpassword123' } });
    
      
        fireEvent.click(screen.getByText('Submit'));
    
        
        expect(logSpy).toHaveBeenCalledWith('Form submitted:', {
          name: 'John Doe',
          email: 'john@example.com',
          newPassword: 'newpassword123',
          confirmPassword: 'newpassword123',
          avatar: ''
        });
    
        
        logSpy.mockRestore();
    });

    
})