import React from "react";

const Accounttem = ({ id, name, phone, onClickDelete }) => (
    <div className="ContactItem">
        <p className="ContactItem__id">{id}</p>
        <p className="ContactItem__name">{name}</p>
        <p className="ContactItem__phone">{phone}</p>
        <button
            type="button"
            className="ContactItem__button"
            onClick={onClickDelete}
        >
            Delete
    </button>
    </div>
);

export default Accounttem;
