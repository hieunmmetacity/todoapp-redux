import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../features/todoSlice";

type Props = {};

const Search = (props: Props) => {
    const dispatch = useDispatch();
    const keyword = useRef<any>();
    const handleClickSearch = () => {
        dispatch(searchByName(keyword.current.value));
    };
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    ref={keyword}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        onClick={handleClickSearch}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Tìm
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Search;
