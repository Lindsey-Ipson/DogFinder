import React from 'react';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import DogDetails from './DogDetails';

const mockDog = {
  name: 'Example Dog',
  age: 3,
  src: 'example.jpg',
  facts: ['Fact 1', 'Fact 2', 'Fact 3'],
};

test('renders DogDetails component with correct content', () => {
  const { getByText, getByAltText } = render(<DogDetails dog={mockDog} />);

  // Check if the dog name is rendered
  expect(getByText(`Meet ${mockDog.name}!`)).toBeInTheDocument();

  // Check if the image is rendered with the correct alt text
  expect(getByAltText(mockDog.name)).toBeInTheDocument();

  // Check if the age and name are rendered
  expect(getByText(`${mockDog.name} is ${mockDog.age} years old.`)).toBeInTheDocument();

  // Check if each fact is rendered
  mockDog.facts.forEach((fact) => {
    expect(getByText(fact)).toBeInTheDocument();
  });
});

test('matches snapshot', () => {
  const { asFragment } = render(<DogDetails dog={mockDog} />);
  expect(asFragment()).toMatchSnapshot();
});

