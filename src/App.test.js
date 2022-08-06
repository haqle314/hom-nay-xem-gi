import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
    render(<App />);
    screen.getByText('Hôm nay xem gì?');
});
