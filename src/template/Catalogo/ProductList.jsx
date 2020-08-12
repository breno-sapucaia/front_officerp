import React, { Component } from 'react';
import './ProductList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import ProductFilter from './ProductFilter';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.handleFilterOpen = this.handleFilterOpen.bind(this)
    }
    state = {
        open: false
    }
    handleFilterOpen() {
        this.setState({ open  : !this.state.open}, () => console.log(this.state))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <small className="bread"> cadastro &gt; produto</small>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6">
                        <h1 className="title">Produtos</h1>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-10 col-sm-4">
                        <div className="input-group input-group-sm ">
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Buscar"
                                placeholder="Buscar"
                                aria-describedby="inputGroup-sizing-sm" />
                            <button className="btn btn-outline-primary" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></button>

                        </div>
                    </div>

                    <div className="col-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => this.handleFilterOpen()}>
                            <FontAwesomeIcon icon={faFilter} />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <button className="btn btn-sm btn-primary">Novo</button>
                    </div>
                    <div className="col-2 ">
                        <div className="dropdown ">
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                Ações
                        </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <div className="table-responsive">
                            <table className="table table-sriped">
                                <thead>
                                    <tr>
                                        <th scope="col"><input type="checkbox" className="form-check-input" /></th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Descrição</th>
                                        <th scope="col"><p className="mb-0" style={{ width: "150px" }}>Preço de Custo</p></th>
                                        <th scope="col">Markup</th>
                                        <th scope="col"><p className="mb-0" style={{ width: "150px" }}>Preço de Venda</p></th>
                                        <th scope="col">Estoque</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                    {mockTable()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ProductFilter open={this.state.open} handleFilterOpen={this.handleFilterOpen}/>
            </div>


        );
    }
}

const mockTable = () => {
    return(
        <tr>
            <td><input type="checkbox" className="form-check-input" /></td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
        </tr>
        )
}


export default ProductList;