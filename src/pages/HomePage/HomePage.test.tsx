import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { SearchContext } from '../../components/SearchContext/SearchContext';
import { aboutMeItems, contentSections, subtitles, banners } from '../../data/contentData'; 


jest.mock('../../components/Header/Header', () => () => <div data-testid="header">Header</div>);
jest.mock('./components/ContentSection', () => () => <div data-testid="content-section">ContentSection</div>);
jest.mock('./components/VideoBlog', () => () => <div data-testid="video-blog">VideoBlog</div>);

describe('HomePage', () => {
  const renderWithProviders = (searchQuery = '') => {
     const setSearchQuery = jest.fn();
    
    render(
      <MemoryRouter>
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
          <HomePage />
        </SearchContext.Provider>
      </MemoryRouter>
    );
  };
    
  test('should renders header', () => {
    renderWithProviders();
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('should renders the about me section with correct items', () => {
    renderWithProviders();
    
    aboutMeItems.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.subtitle)).toBeInTheDocument();
    });
  });

 

  test('should render subtitles from content', () => {
        renderWithProviders();
    
        subtitles.forEach(subtitle => {
          expect(screen.getByText(subtitle.mainSubtitle)).toBeInTheDocument();
          expect(screen.getByText(subtitle.secondarySubtitle)).toBeInTheDocument();
        });
  });

  test('should open a dialog box when you click on the file selection button', () => {
    renderWithProviders();
      
    const fileButton = screen.getByTestId('upload-button');
    fireEvent.click(fileButton);
      
        
    expect(screen.getByLabelText('Write something with two button addons')).toBeVisible();
  });


  test('should upload the file and clear the selection after uploading', () => {
    renderWithProviders();
  
    const fileInput = screen.getByLabelText('Write something with two button addons') as HTMLInputElement;
    const uploadButton = screen.getByTestId('upload-button');
  
    fireEvent.change(fileInput, { target: { files: [new File(['dummy content'], 'example.png', { type: 'image/png' })] } });
    expect(fileInput.files?.[0].name).toBe('example.png');
  
   
    fireEvent.click(uploadButton);
  
    
    expect(fileInput.files).toHaveLength(1);
  }); 


  test('should filter content based on search query', () => {
    const searchQuery = 'search term';
    renderWithProviders(searchQuery);

    aboutMeItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .forEach(item => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      
    });
  });

  test('should renders content sections correctly', () => {
    renderWithProviders();

    const contentSectionsElements = screen.getAllByTestId('content-section');
    expect(contentSectionsElements.length).toBeGreaterThanOrEqual(2);

    contentSections.slice(0, 2).forEach(() => {
      expect(contentSectionsElements.length).toBeGreaterThanOrEqual(1);
    });
  });

  test('should renders video blog component', () => {
    renderWithProviders();
    const videoBlog = screen.getByTestId('video-blog');
    expect(videoBlog).toBeInTheDocument();
  });

  test('should renders banners correctly', () => {
    renderWithProviders();
    
    const bannerImages = screen.getAllByRole('img') as HTMLImageElement[];

    expect(bannerImages.length).toBeGreaterThanOrEqual(banners.length);
    
    banners.forEach((banner) => {
        const bannerImage = bannerImages.find(img => img.alt === banner.alt);
        expect(bannerImage).toBeInTheDocument();
    });
  });
    

})

