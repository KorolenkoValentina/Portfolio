import React from 'react';
import { render, screen } from '@testing-library/react';
import AdvertisementPage from './AdvertisementPage';
import { workItems } from '../../data/contentData';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);

describe('AdvertisementPage', () => {
  test('should renders without errors', () => {
    render(
      <BrowserRouter>
        <AdvertisementPage />
      </BrowserRouter>
    );
  });

  test('should renders Header component', () => {
    render(
      <BrowserRouter>
        <AdvertisementPage />
      </BrowserRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  test('should render the title "My works"', () => {
    render(
      <BrowserRouter>
        <AdvertisementPage />
      </BrowserRouter>
    );
    const title = screen.getByText('My work');
    expect(title).toBeInTheDocument();
  });


  test('should renders images with correct alt texts and src attributes', () => {
    render(
      <BrowserRouter>
        <AdvertisementPage />
      </BrowserRouter>
    );

    workItems.forEach((item) => {
      const image = screen.getByAltText(item.altText);
      expect(image).toHaveAttribute('src', item.imageSrc);
    });
  });
  test('should renders all work items', () => {
    render(
      <BrowserRouter>
        <AdvertisementPage />
      </BrowserRouter>
    );
    workItems.forEach((item) => {
      const title = screen.getByText(item.title);
      expect(title).toBeInTheDocument();

      const subtitle = screen.getByText(item.subtitle);
      expect(subtitle).toBeInTheDocument();

      
      item.tags.forEach((tag) => {
        const tagButtons = screen.getAllByText(tag);
        expect(tagButtons.length).toBeGreaterThan(0);
      });

      const linkButtons = screen.getAllByText(item.linkText);
      expect(linkButtons.length).toBe(2); 
    });
  });
})