/**
 *  @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
// import { JSDOM } from 'jsdom';
import App from './App';

describe('App initial tests', () => {
  /* beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window as any;
    global.document = dom.window.document;
  }); */

  it('renders without crashing', () => {
    render(<App />);
  });

  it('has the same number of cards as there are in the cat.js file', () => {
    render(<App />);
    const card = screen.getAllByRole('article');
    expect(card).toHaveLength(10);
  });
});
