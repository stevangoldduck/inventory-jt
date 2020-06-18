import React, { Component } from 'react';

export default class Dtatable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entities: {
                data: [],
                meta: {
                    current_page: 1,
                    from: 1,
                    last_page: 1,
                    per_page: 5,
                    to: 1,
                    total: 1,
                },
            },
            first_page: 1,
            current_page: 1,
            sorted_column: this.props.columns[0],
            offset: 4,
            order: 'asc',
        };
    }

    fetchEntities() {
        const config =
        {
            headers: { 'Authorization': `Bearer ${this.props.access_token}` }
        }
        let fetchUrl = `${this.props.url}/?page=${this.state.current_page}&column=${this.state.sorted_column}&order=${this.state.order}&per_page=${this.state.entities.meta.per_page}`;
        axios.get(fetchUrl, config)
            .then(response => {
                var entities = {...this.state.entities}
                entities.data = response.data.data
                entities.meta.current_page = response.data.current_page
                entities.meta.from = response.data.from
                entities.meta.last_page = response.data.last_page
                entities.meta.per_page = response.data.per_page
                entities.meta.to = response.data.to
                entities.meta.total = response.data.total
                this.setState({entities});
                //this.setState({ entities: response.data });
            })
            .catch(e => {
                console.error(e);
            });
    }

    changePage(pageNumber) {
        this.setState({ current_page: pageNumber }, () => { this.fetchEntities() });
    }

    columnHead(value) {
        return value.split('_').join(' ').toUpperCase()
    }

    pagesNumbers() {
        if (!this.state.entities.meta.to) {
            return [];
        }
        let from = this.state.entities.meta.current_page - this.state.offset;
        if (from < 1) {
            from = 1;
        }
        let to = from + (this.state.offset * 2);
        if (to >= this.state.entities.meta.last_page) {
            to = this.state.entities.meta.last_page;
        }
        let pagesArray = [];
        for (let page = from; page <= to; page++) {
            pagesArray.push(page);
        }
        return pagesArray;
    }

    componentDidMount() {
        this.setState({ current_page: this.state.entities.meta.current_page }, () => { this.fetchEntities() });
    }

    tableHeads() {
        let icon;
        if (this.state.order === 'asc') {
            icon = <i className="fas fa-arrow-up"></i>;
        } else {
            icon = <i className="fas fa-arrow-down"></i>;
        }
        return this.props.columns.map(column => {
            return <th className="table-head" key={column} onClick={() => this.sortByColumn(column)}>
                {this.columnHead(column)}
                {column === this.state.sorted_column && icon}
            </th>
        });
    }

    dataList() {
        if (this.state.entities.data.length > 0) {
            return this.state.entities.data.map(product => {
                return <tr key={product.id}>
                    {Object.keys(product).map(key => <td key={key}>{product[key]}</td>)}
                </tr>
            })
        } else {
            return <tr>
                <td colSpan={this.props.columns.length} className="text-center">No Records Found.</td>
            </tr>
        }
    }

    sortByColumn(column) {
        if (column === this.state.sorted_column) {
            this.state.order === 'asc' ? this.setState({ order: 'desc', current_page: this.state.first_page }, () => { this.fetchEntities() }) : this.setState({ order: 'asc' }, () => { this.fetchEntities() });
        } else {
            this.setState({ sorted_column: column, order: 'asc', current_page: this.state.first_page }, () => { this.fetchEntities() });
        }
    }

    pageList() {
        return this.pagesNumbers().map(page => {
            return <li className={page === this.state.entities.meta.current_page ? 'page-item active' : 'page-item'} key={page}>
                <button className="page-link" onClick={() => this.changePage(page)}>{page}</button>
            </li>
        })
    }

    render() {
        return (
            <div className="data-table table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>{this.tableHeads()}</tr>
                    </thead>
                    <tbody>{this.dataList()}</tbody>
                </table>
                {(this.state.entities.data && this.state.entities.data.length > 0) &&
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link"
                                    disabled={1 === this.state.entities.meta.current_page}
                                    onClick={() => this.changePage(this.state.entities.meta.current_page - 1)}
                                >
                                    Previous
                </button>
                            </li>
                            {this.pageList()}
                            <li className="page-item">
                                <button className="page-link"
                                    disabled={this.state.entities.meta.last_page === this.state.entities.meta.current_page}
                                    onClick={() => this.changePage(this.state.entities.meta.current_page + 1)}
                                >
                                    Next
                </button>
                            </li>
                            <span style={{ marginTop: '8px' }}> &nbsp; <i>Displaying {this.state.entities.data.length} of {this.state.entities.meta.total} entries.</i></span>
                        </ul>
                    </nav>
                }
            </div>
        );
    }
}
