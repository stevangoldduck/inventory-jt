import React, { Component } from "react";


class EditProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            type: props.type,
        };
    }
    render() {
        const {id, name, price, type} = this.state;
        return (
            <div className="modal fade" id={'exampleModal_' + this.state.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit  {name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={event => this.setState({ name: event.target.value })}
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" value={type} name="type" onChange={event => this.setState({ type: event.target.value })}>
                                            <option value="2">Motor</option>
                                            <option value="1">Kapal</option>
                                            <option value="3">Mobil</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            onChange={event => this.setState({ price: event.target.value })}
                                            name="price"
                                            value={price}
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-info" onClick={ e => this.props.onClick(id,name,price,type)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProductModal;
