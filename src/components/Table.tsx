import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus } from "../features/todoSlice";
import { IToDo } from "../types/todoType";
import Item from "./Item";

type Props = {};

const Table = (props: Props) => {
    const dispatch = useDispatch();
    const todoList: IToDo[] = useSelector((state: any) => state.todoList.value);
    const todoFilter: IToDo[] = useSelector(
        (state: any) => state.todoList.todoFilter
    );
    const todos = todoFilter ? todoFilter : todoList;

    const handleRemove = (id: string) => {};
    const handleFilterByStatus = (e: any) => {
        console.log(e.target.value);
        dispatch(filterByStatus(e.target.value));
    };
    const handleChangeSearch = (e: any) => {};
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChangeSearch}
                        />
                    </td>
                    <td>
                        <select
                            className="form-control"
                            name="filterStatus"
                            onChange={handleFilterByStatus}
                        >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {todos.map((item, index) => (
                    <Item item={item} key={index} index={index} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
