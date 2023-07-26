import PropTypes from "prop-types";

//Movie 컴포넌트는 이 property를 다 부모 컴포넌트로부터 받아온다.
function Movie({ coverImg, title, summary, genres }){

    return  (
        <div>
            {/* img에 오류가 뜨는 이유. 모든 이미지 element들은 alt 속성을 가지기 때문 */}
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>)
                )}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;