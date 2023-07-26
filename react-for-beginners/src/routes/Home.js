import { useEffect, useState } from "react";

function Home (){
    const [loading, setLoading] = useState(true);
    //여기서 movies는 비어있는 상태
    const [movies, setMovies] = useState([]);
    //async 사용
    const getMovies = async() => {
        /*
        const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );
        const json = await response.json();
        */
        //더 간단한 방법
        //data를 API로부터 받아오는 state
        const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
        ).json();
        //여기서 movies를 받아오면 API로부터 얻은 data로 state를 변경한다.
        setMovies(json.data.movies);
        //loading 되었을 때 setLoading을 false로 바꿔준다.
        setLoading(false);
    }

  useEffect(() => {
   getMovies();
  }, []) 
  console.log(movies);

  return (
    // state로부터 받은 data 보여주기
    <div>
        {loading ? (
            <h1>Loading . . .</h1>
        ) : (
            <div>
            {movies.map((movie) => (
                <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                />
            ))}
            </div>
        )}
    </div>
  );
}

export default Home;