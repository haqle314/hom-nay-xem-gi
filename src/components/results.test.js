import { render, screen } from '@testing-library/react';
import { Results } from './results';

test('hides results initially', () => {
    render(<Results />);
    const results = screen.getByText('Recommendations');
    expect(results.style.display).toBe('none');
});

test('display a list with correct number of results', () => {
    const recommendations = [
        {
            name: 'Moonlight',
            rating: 98,
            showing: new Date(),
        },
        {
            name: 'Shaun The Sheep',
            rating: 80,
            showing: new Date(),
        },
    ];
    render(<Results showResults={true} recommendations={recommendations} />);

    const results = screen.getByText('Recommendations');
    expect(results.style.display).not.toBe('none');

    const numberOfShowings = screen.getAllByText(/showing/).length;
    expect(numberOfShowings).toBe(recommendations.length);
});
