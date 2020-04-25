import React, { Component } from'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        await fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(res => {
                console.log("res", res);
                this.setState({products: res.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const {products} = this.state;
        return (
            <div className="tableContent">
                {/*<button className="btn btn-success addUser" onClick = {this.addUser.bind(this)}>Add</button><br/>*/}
                <ReactTable data={products}
                            columns={[
                                {
                                    columns: [
                                        {
                                            Header: "Employee Name",
                                            accessor: "employee_name"

                                        },
                                        {
                                            Header: "Employee Salary",
                                            accessor: "employee_salary"
                                        },
                                        {
                                            Header: "Employee Age",
                                            accessor: "employee_age"
                                        },
                                    ]

                                }

                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                />
            </div>
        )

    }
}

export default Table ;