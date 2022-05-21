import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div>
            <h2 className="text-center m-4 text-danger">
                Todo App - Redux Toolkit
            </h2>
            <hr />
        </div>
    );
};

export default Header;
