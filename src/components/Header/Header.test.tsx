import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { SearchProvider } from '../SearchContext/SearchContext';


const renderWithSearchProvider = () => {
  render(
    <Router>
      <SearchProvider>
        <Header />
      </SearchProvider>
    </Router>
  );
};

describe('Header', () => {
    test('should render the component Header', () => {
        renderWithSearchProvider();
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });

    test('should render logos for the mobile version', () => {
        renderWithSearchProvider();
        const mobileBackgroundImage = screen.getByAltText('Mobile background');
        const photoMobileImage = screen.getByAltText('Dmitryi Valak');

        expect(mobileBackgroundImage).toBeInTheDocument();
        expect(photoMobileImage).toBeInTheDocument();
    });

    test('should render navigation links', () => {
        renderWithSearchProvider();
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About me');
        const articlesDropdown = screen.getByText('Articles');
        const advertisementLink = screen.getByText('Advertisement');
        const profileLink = screen.getByText('Profile');

        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(articlesDropdown).toBeInTheDocument();
        expect(advertisementLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
    });

    test('should render the search fields and the search button', () => {
        renderWithSearchProvider();
    
        
        const searchFields = screen.queryAllByPlaceholderText('Blog Search');
        expect(searchFields).toHaveLength(2); 
    
      
        const searchButton = screen.getByText('Search');
        expect(searchButton).toBeInTheDocument();
    });

    test('should update the value of the search query when the entered text changes', () => {
        renderWithSearchProvider();
        const searchField = screen.getAllByPlaceholderText('Blog Search')[1]; 
        fireEvent.change(searchField, { target: { value: 'React' } });
    
        expect(searchField).toHaveValue('React');
    });

    test('should call the handleSearch function when the Search button is pressed', () => {
        renderWithSearchProvider();
        const searchField = screen.getAllByPlaceholderText('Blog Search')[1]; 
        const searchButton = screen.getByText('Search');
    
        fireEvent.change(searchField, { target: { value: 'React' } });
        fireEvent.click(searchButton);
    
      
    });

    test('must have the correct routes for navigation links', () => {
        renderWithSearchProvider();
      
        
        const homeLink = screen.getByText('Home') as HTMLAnchorElement;
        const aboutLink = screen.getByText('About me') as HTMLAnchorElement;
        const articlesDropdown = screen.getByText('Articles') as HTMLAnchorElement;
        
        fireEvent.click(articlesDropdown);
      
        const articlesLink = screen.getByText('Website creation') as HTMLAnchorElement;
      
        expect(homeLink).toHaveAttribute('href', '/');
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(articlesLink).toHaveAttribute('href', '/articles');
    });
      

    test('must have the correct text for each navigation link', () => {
        renderWithSearchProvider();
        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About me');
        const articlesDropdown = screen.getByText('Articles');
        const advertisementLink = screen.getByText('Advertisement');
        const profileLink = screen.getByText('Profile');

        expect(homeLink).toHaveTextContent('Home');
        expect(aboutLink).toHaveTextContent('About me');
        expect(articlesDropdown).toHaveTextContent('Articles');
        expect(advertisementLink).toHaveTextContent('Advertisement');
        expect(profileLink).toHaveTextContent('Profile');
    });

});
