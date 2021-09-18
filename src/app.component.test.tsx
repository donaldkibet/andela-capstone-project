import React from 'react';
import { render } from '@testing-library/react';
import App from './app.component';

describe('App', () => {
  it('should render without dying', () => {
    render(<App />);
  });
});
