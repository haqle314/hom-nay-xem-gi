import * as DateFns from 'date-fns';

export function Results({ showResults, recommendations }) {
    return (
        <div style={{ display: showResults ? 'initial' : 'none' }}>
            Recommendations
            {recommendations?.length ? (
                <ul className="recommendations">
                    {recommendations.map(({ name, showing }, idx) => (
                        <li key={idx}>
                            {name}, showing at {DateFns.format(showing, 'haaa')}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movie recommendations</p>
            )}
        </div>
    );
}
