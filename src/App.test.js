import {render,screen} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';
import App from './App';

test('renders coming soon text', () => {
    render (<App/>);
    const h1Element = screen.getByText(/Hello World/i);
    expect(h1Element).toBeInTheDocument();
});