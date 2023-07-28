import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();   //여기서 id 값을 찾아올 수 있다.
    console.log(id); //선택한 영화의 id 값이 console창에 출력된다. !
    const getMovie = async () => {
        const json = await( //id 값을 알고 있으니까 API로부터 정보를 fetch 해올 수 있다.
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    useEffect(() => {   
            getMovie();
    }, []);
    
    return <h1>Detail</h1>
}

export default Detail;