import React from 'react';
import { render, screen,  fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AlbumPage from './AlbumPage';
import { albumData } from '../../data/albumData '; 

const renderWithRouter = (albumId: string) => {
    render(
      <MemoryRouter initialEntries={[`/about/${albumId}`]}>
        <Routes>
          <Route path="/about/:albumId" element={<AlbumPage />} />
        </Routes>
      </MemoryRouter>
    );
};
  
describe('AlbumPage', () => {
    test('should render the album and its data', () => {
      renderWithRouter('relaxing-in-nature');
  
      const title = screen.getByText(albumData['relaxing-in-nature'].title);
      expect(title).toBeInTheDocument();
  
      const date = screen.getByText(albumData['relaxing-in-nature'].date);
      expect(date).toBeInTheDocument();
  
      albumData['relaxing-in-nature'].images.forEach((_, index) => {
        const image = screen.getByAltText(`album-${index}`);
        expect(image).toBeInTheDocument();
      });
    });

    test('should render the message "Album not found" if the album is not found', () => {
        renderWithRouter('non-existing-album');
        const notFoundMessage = screen.getByText('Album not found');
        expect(notFoundMessage).toBeInTheDocument();
    });

    test('should show a modal window with the selected image when you click on the image', () => {
        renderWithRouter('relaxing-in-nature');
    
        const firstImage = screen.getByAltText('album-0');
        fireEvent.click(firstImage);
    
        const modalImage = screen.getByAltText('Selected');
        expect(modalImage).toBeInTheDocument();
        expect(modalImage).toHaveAttribute('src', albumData['relaxing-in-nature'].images[0]);
    });

    test('should close the modal window when you click on the overlay', () => {
        renderWithRouter('relaxing-in-nature');
    
        const firstImage = screen.getByAltText('album-0');
        fireEvent.click(firstImage);
    
        const modalOverlay = screen.getByRole('dialog');
        fireEvent.click(modalOverlay);
    
        expect(modalOverlay).not.toBeInTheDocument();
    });

    test('should navigate back to the about me page when clicking on the Back button', () => {
        renderWithRouter('relaxing-in-nature');
    
        const backButton = screen.getByText('Back');
        fireEvent.click(backButton);
    
        expect(screen.queryByText(albumData['relaxing-in-nature'].title)).not.toBeInTheDocument();
    });
})