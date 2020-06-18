import React, { Component } from "react";


class EditProductCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
        };
    }
    render() {
        const {id, name} = this.state;
        return (
            <div className="modal fade" id={'modal_edit_pc_' + this.state.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit {name}</h5>
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
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-info" onClick={ e => this.props.onClick(id,name)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProductCategoryModal;
