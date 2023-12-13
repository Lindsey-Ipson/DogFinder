import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

const mockDogs = [
  { name: 'Dog1' },
  { name: 'Dog2' },
  // Add more mock dogs as needed
];

test('renders NavBar component with correct content', () => {
  const { getByText, getAllByRole } = render(
    <Router>
      <NavBar dogs={mockDogs} />
    </Router>
  );

  // Check if the "Home" link is rendered
  expect(getByText('Home')).toBeInTheDocument();

  // Check if each dog's name is rendered as a NavLink
  mockDogs.forEach((dog) => {
    const link = getByText(dog.name);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/dogs/${dog.name.toLowerCase()}`);
  });
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <Router>
      <NavBar dogs={mockDogs} />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
