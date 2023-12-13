import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DogList from './DogList';

const mockDogs = [
  { name: 'Dog1', src: 'dog1.jpg' },
  { name: 'Dog2', src: 'dog2.jpg' },
];

test('renders DogList component with correct content', () => {
  const { getByText, getAllByAltText, getByRole } = render(
    <Router>
      <DogList dogs={mockDogs} />
    </Router>
  );

  // Check if the title is rendered
  expect(getByText('Meet the dogs!')).toBeInTheDocument();

  // Check if each dog's name is rendered as a link
  mockDogs.forEach((dog) => {
    const link = getByRole('link', { name: new RegExp(dog.name, 'i') });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/dogs/${dog.name.toLowerCase()}`);
  });

  // Check if each dog's image is rendered
  mockDogs.forEach((dog) => {
    expect(getAllByAltText(dog.name)).toHaveLength(1);
  });
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <Router>
      <DogList dogs={mockDogs} />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});