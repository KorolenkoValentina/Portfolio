import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';
import AboutMePage from './AboutMePage';
import { aboutMeItems } from '../../data/contentData'; 



jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);


describe('AboutMePage', () => {
  const renderWithRouters =()=>{
    render(
      <BrowserRouter>
        <AboutMePage />
      </BrowserRouter>
    )
  }
  test('should  renders without errors', () => {
    renderWithRouters()
  });
  test('renders Header component', () => {
    renderWithRouters()
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  test('should  render the title "About Me"', () => {
    renderWithRouters()
    const title = screen.getByText('About Me');
    expect(title).toBeInTheDocument();
  });
  test('should render information blocks', () => {
    renderWithRouters()
      
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
    } );
  });
 


   
})