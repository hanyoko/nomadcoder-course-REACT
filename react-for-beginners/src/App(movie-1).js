import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    ).then((response) => response.json()
    ).then(json => {
      setMovies(json.data.movies);
      //로딩을 끝냈기 때문에 setLoading을 false로 만들어둬야 한다는 걸 잊으면 안 된다. !
      setLoading(false);
    });
  }, []) //빈배열은 어떤 것도 주시하거나 의존하지 않고 있다는 것을 의미 !
  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading . . .</h1> : null}
    </div>
  );
}

export default App;
