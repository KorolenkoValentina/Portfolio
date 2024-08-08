import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';
import AboutMePage from './AboutMePage';
import { aboutMeItems } from '../../data/contentData'; 



jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);


describe('AboutMePage', () => {
  test('should  renders without errors', () => {
    render(
      <BrowserRouter>
        <AboutMePage />
      </BrowserRouter>
    );
  });
  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <AboutMePage />
      </BrowserRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  test('should  render the title "About Me"', () => {
    render(
      <BrowserRouter>
        <AboutMePage />
      </BrowserRouter>
    );
    const title = screen.getByText('About Me');
    expect(title).toBeInTheDocument();
  });
  test('should render information blocks', () => {
    render(
        <BrowserRouter>
          <AboutMePage />
        </BrowserRouter>
      );
      
      aboutMeItems.forEach((item) => {
        const link = screen.getByRole('link', { name: new RegExp(item.title, 'i') });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/about/${item.title.toLowerCase().replace(/ /g, '-')}`);
        
        const image = screen.getByAltText(item.title);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', item.src);
  
        const itemTitle = screen.getByText(item.title);
        expect(itemTitle).toBeInTheDocument();
        
        const itemSubtitle = screen.getByText(item.subtitle);
        expect(itemSubtitle).toBeInTheDocument();
      });
    });
 


   
})