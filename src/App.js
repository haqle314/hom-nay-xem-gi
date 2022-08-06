import { useState } from 'react';
import { RecommendationsForm, Results } from './components';
import './App.css';

function App({ listingService }) {
    const genres = listingService.genres;
    const [recommendations, setRecommendations] = useState([]);
    const [time, setTime] = useState(new Date());
    const [genre, setGenre] = useState('');
    const [showResults, setShowResults] = useState(false);

    function onSubmit(ev) {
        ev.preventDefault();
        setRecommendations(listingService.findListing(genre, time));
        setShowResults(true);
    }

    function onReset(ev) {
        ev.preventDefault();
        setRecommendations([]);
        setGenre('');
        setTime(new Date());
        setShowResults(false);
    }

    return (
        <div className="App">
            Hôm nay xem gì?
            <RecommendationsForm
                {...{
                    genres,
                    time,
                    setTime,
                    genre,
                    setGenre,
                    onSubmit,
                    onReset,
                }}
            />
            <Results
                showResults={showResults}
                recommendations={recommendations}
            />
        </div>
    );
}

export default App;
