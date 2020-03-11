import React from "react";

const Accounttem = ({ id, name, email, password, role, onClickDelete }) => (
    <div className="ContactItem">
        <p className="ContactItem__id">{id}</p>
        <p className="ContactItem__name">{name}</p>
        <p className="ContactItem__email">{email}</p>
        <p className="ContactItem__pass">{password}</p>
        <p className="ContactItem__phone">{role}</p>
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
