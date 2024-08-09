import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


jest.mock('../Modal/ModalPage', () => {
  return ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
    isOpen ? <div role="dialog" onClick={onClose}>Modal Content</div> : null
  );
});

describe('Sidebar', () => {
  const renderWithRouters =()=>{
    render(
      <Router>
      <Sidebar />
    </Router>
    )
  }
  test('should render the title, text, and image', () => {
    renderWithRouters()

    const title = screen.getByText('Dmitry Valak');
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/Front-end developer. Practitioner of website layout./i);
    expect(subtitle).toBeInTheDocument();

    const sidebarImg = screen.getByAltText('sidebar');
    expect(sidebarImg).toBeInTheDocument();

    const sidebarPhoto = screen.getByAltText('sidebar-photo');
    expect(sidebarPhoto).toBeInTheDocument();
  });

  test('should render links to social networks', () => {
    renderWithRouters()

    const instagramLink = screen.getByLabelText('Instagram');
    expect(instagramLink).toBeInTheDocument();

    const facebookLink = screen.getByLabelText('Facebook');
    expect(facebookLink).toBeInTheDocument();

    const pinterestLink = screen.getByLabelText('Pinterest');
    expect(pinterestLink).toBeInTheDocument();
  });

  test('should display a modal window when you click on the "Write to me" button', () => {
    renderWithRouters()

    const openModalButton = screen.getByText('Write to me');
    fireEvent.click(openModalButton);

    const modalContent = screen.getByRole('dialog');
    expect(modalContent).toBeInTheDocument();
  });

  test('should close the modal window when you click on the overlay', () => {
    renderWithRouters()

    const openModalButton = screen.getByText('Write to me');
    fireEvent.click(openModalButton);

    const modalContent = screen.getByRole('dialog');
    fireEvent.click(modalContent); 

    expect(modalContent).not.toBeInTheDocument();
  });

  test('should navigate when clicking on the "My work" link', () => {
    renderWithRouters()

    const myWorkLink = screen.getByText('My work');
    fireEvent.click(myWorkLink);

    expect(window.location.pathname).toBe('/advertisement');
  });
});
