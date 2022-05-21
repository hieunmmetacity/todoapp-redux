import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../features/showFormSlice";
import { addTodoList, updateTodoList } from "../features/todoSlice";
import { getUuid } from "../utils/uuid";

type Props = {
    action: string;
};

const Form = (props: Props) => {
    const dispatch = useDispatch();

    const name = useRef<any>();
    const status = useRef<any>();

    const showForm = useSelector((state: any) => state.showForm.value);
    const todoUpdate = useSelector((state: any) => state.todoList.todoUpdate);

    useEffect(() => {
        if (showForm.action === "add") {
            name.current.value = "";
            status.current.value = "1";
        }
    }, [showForm.action]);
    useEffect(() => {
        if (props.action === "update") {
            name.current.value = todoUpdate.name;
            status.current.value = todoUpdate.status;
        }
    }, [todoUpdate]);

    // close box form add
    const handleClickClose = () => {
        dispatch(setShowForm({ status: false, action: "" }));
    };
    //Reset form add
    const handleReset = () => {
        name.current.value = "";
        status.current.value = "1";
    };

    // Send data to app
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (showForm.action === "update") {
            const data = {
                id: todoUpdate.id,
                name: name.current.value,
                status: status.current.value,
            };
            // props.onUpdate(data);
            dispatch(updateTodoList(data));
        } else {
            const data = {
                id: getUuid(),
                name: name.current.value,
                status: status.current.value,
            };
            dispatch(addTodoList(data));

            handleReset();
        }
    };
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning border p-4">
                <div className="panel-heading">
                    <h3 className="panel-title d-flex justify-content-between">
                        <div>
                            {showForm.action === "add"
                                ? "Thêm công việc"
                                : "Cập nhật công việc"}
                        </div>
                        <div>
                            <span
                                className="fa fa-times-circle"
                                onClick={handleClickClose}
                            ></span>
                        </div>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={name}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" ref={status}>
                            <option value={1}>Kích hoạt</option>
                            <option value={0}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>
                                Lưu Lại
                            </button>
                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleReset}
                            >
                                <span className="fa fa-close mr-5"></span>
                                Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
