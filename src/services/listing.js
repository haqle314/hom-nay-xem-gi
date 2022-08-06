import * as DateFns from 'date-fns';

function addToSet(set, items) {
    items.forEach((item) => set.add(item));
    return set;
}

export class Listing {
    constructor(database) {
        const data = database.getAll();
        this.genres = Array.from(
            data
                .reduce(
                    (result, entry) => addToSet(result, entry.genres),
                    new Set()
                )
                .values()
        );
        const today = DateFns.format(new Date(), 'yyyy-MM-dd');
        this.data = data
            .reduce(
                (movies, movie) =>
                    movies.concat(
                        movie.showings.map((showing) => ({
                            showing: new Date(`${today}T${showing}`),
                            ...movie,
                        }))
                    ),
                []
            )
            .map((movie) => {
                delete movie.showings;
                return movie;
            })
            .sort((a, b) => (a.rating > b.rating ? -1 : 1));
    }

    findListing(genre, time) {
        const limit = DateFns.add(new Date(time), { minutes: 30 });
        return this.data.filter(
            ({ genres, showing }) =>
                genres.includes(genre) && !DateFns.isBefore(showing, limit)
        );
    }
}
