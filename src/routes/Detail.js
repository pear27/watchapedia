import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function MovieDetail({ large_cover_image, title, year, genres, rating, runtime, description_full }) {
    return (
        <div>
            <img src={large_cover_image} alt={title} />
            <h2>
                {title}
            </h2>
            <h3>{year}</h3>
            <ul>
                {genres.map(g =>
                    <li key={g}>{g}</li>
                )}
            </ul>
            <p>
                rating: {rating}
            </p>
            <p>
                runtime: {runtime}
            </p>
            <p>{description_full}</p>

        </div>
    )
}

/*
description_full: "Charlie Swift aka \"Fast Charlie\" is a fixer with a problem: the target he's whacked is missing his head. And he must be able to prove it's the intended target to the man who paid for the hit - New Orleans' biggest and most ruthless mobster, Beggar Mercado. Charlie enlists Marcie Kramer , the victim's ex-wife and a woman with the backbone and skillset Charlie needs. Dragging Marcie back into a past she was determined to escape sends the two of them on a wild and unpredictable odyssey that's at once hilarious and action-packed, and ultimately heartfelt. Along the way, Charlie and Marcie fight to protect the legacy of Charlie's best friend and mentor Stan Mullins while bringing down Beggar and his entire operation.—Phillip Noyce"
genres: ['Action', 'Crime', 'Drama', 'Mystery', 'Thriller']
large_cover_image: "https://yts.mx/assets/images/movies/fast_charlie_2023/large-cover.jpg"
rating: 8.5
runtime: 90
title: "Fast Charlie"
year: 2023 */




function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?
            movie_id=${id}`)
        ).json();
        //console.log(json);
        setLoading(false);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    <h1>Detail</h1>
                    <MovieDetail
                        large_cover_image={movie.large_cover_image}
                        title={movie.title}
                        year={movie.year}
                        genres={movie.genres}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        description_full={movie.description_full}
                    />
                </div>
            )}
        </div>
    );
}

export default Detail;