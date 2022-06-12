/**
 *  @jest-environment jsdom
 */

import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import cats from '../cats';

describe('Everything on cards shows up', () => {
  it('renders without crashing', () => {
    render(<Card Cat={cats[0]} />);
  });

  it('shows all the cat data', () => {
    render(<Card Cat={cats[0]} />);
    const image = screen.getByRole('img');
    const name = screen.getByRole('heading');
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(items).toHaveLength(2); // breed and age
  });

  it('has all the expected text', () => {
    render(<Card Cat={cats[0]} />);
    const image = screen.getByRole('img');
    const name = screen.getByText('Fluffikins');
    const breed = screen.getByText('Orange tabby');
    const age = screen.getByText('8 years');
    const description = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    );
    const link = screen.getByText('More information');
    expect(image).toHaveAttribute('src', 'https://placekitten.com/800/600');
    expect(image).toHaveAttribute(
      'alt',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    );
    expect(name).toBeInTheDocument();
    expect(breed).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('it says year if the cat is only 1 year old', () => {
    render(<Card Cat={cats[3]} />);
    const age = screen.getByText('1 year');
    expect(age).toBeInTheDocument();
  });
});
