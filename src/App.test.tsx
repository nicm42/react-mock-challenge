import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import App from './App';

describe('App initial tests', () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window as any;
    global.document = dom.window.document;
  });

  it('renders without crashing', () => {
    render(<App />);
  });
});
