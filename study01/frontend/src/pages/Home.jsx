import { useNavigate } from "react-router";
import { list } from "@data/data.js"
import BoardTable from "@assets/BoardTable";

const Home = () => {
    const navigate = useNavigate();
    const navigateBoardview = () => navigate("/board/boardview");
    const onSearch = e => {
        e.preventdefault()
    }

    return (
        <div>
            <div className="container mt-3">
                <h1 className="display-1 text-center">게시판</h1>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="btn-group">
                        <button type="button" onClick={() => navigate("/board/boardadd")} className="btn btn-primary">게시글 작성</button>
                    </div>
                    <form onSubmit={onSearch} className="d-flex" style={{ maxWidth: "300px" }}>
                        <input className="form-control me-2" type="search" placeholder="검색어를 입력하세요" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
                <BoardTable list={list} onClick={navigateBoardview} />
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-4">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Home;