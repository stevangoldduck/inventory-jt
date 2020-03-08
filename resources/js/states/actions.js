export function addAccount(account) {
    const {id, name, phone} = account;
    return {
        type: "ADD_ACCOUNT",
        id,
        name,
        phone
    };
}

export function removeAccount(id) {
    return {
        type: "REMOVE_ACCOUNT",
        id
    };
}
