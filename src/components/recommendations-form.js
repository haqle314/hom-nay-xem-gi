import * as DateFns from 'date-fns';

export function RecommendationsForm({
    genres,
    genre,
    setGenre,
    time,
    setTime,
    onSubmit,
    onReset,
}) {
    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <label>
                    Genre
                    <input
                        type="search"
                        id="genre"
                        list="genre-list"
                        onChange={(e) => setGenre(e.target.value)}
                        value={genre}
                        required
                    />
                </label>
                <label>
                    Time
                    <input
                        type="time"
                        id="time"
                        value={DateFns.format(time, 'HH:mm')}
                        required
                        onChange={(e) => {
                            const today = DateFns.format(
                                new Date(),
                                'yyyy-MM-dd'
                            );
                            setTime(new Date(`${today} ${e.target.value}`));
                        }}
                    />
                </label>
            </fieldset>
            <input type="reset" onClick={onReset} />
            <input type="submit" />
            <datalist id="genre-list">
                {genres.map((genre) => (
                    <option value={genre} key={genre} />
                ))}
            </datalist>
        </form>
    );
}
