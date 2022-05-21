import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByName, sortByStatus } from "../features/todoSlice";

type Props = {};

const Filter = (props: Props) => {
    const dispatch = useDispatch();
    const [showIconClicked, setShowIconClicked] = useState("");
    const handleSortByStatus = (sortBy: string) => {
        console.log("sort");

        if (sortBy === "active") {
            setShowIconClicked("active");
        } else if (sortBy == "hide") {
            setShowIconClicked("hide");
        }
        dispatch(sortByStatus(sortBy));
    };
    const handleSortByName = (sortBy: string) => {
        if (sortBy === "az") {
            setShowIconClicked("az");
        } else if (sortBy == "za") {
            setShowIconClicked("za");
        }
        dispatch(sortByName(sortBy));
    };
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Sắp xếp
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li onClick={() => handleSortByName("az")}>
                        <span className="dropdown-item">
                            Tên A-Z
                            {showIconClicked === "az" ? (
                                <i className="fa-solid fa-check ms-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                    <li onClick={() => handleSortByName("za")}>
                        <span className="dropdown-item">
                            Tên Z-A
                            {showIconClicked === "za" ? (
                                <i className="fa-solid fa-check ms-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li onClick={() => handleSortByStatus("active")}>
                        <span className="dropdown-item">
                            Trạng thái: Ẩn
                            {showIconClicked === "active" ? (
                                <i className="fa-solid fa-check ms-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                    <li onClick={() => handleSortByStatus("hide")}>
                        <span className="dropdown-item">
                            Trạng thái: Kích hoạt
                            {showIconClicked === "hide" ? (
                                <i className="fa-solid fa-check ms-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;
