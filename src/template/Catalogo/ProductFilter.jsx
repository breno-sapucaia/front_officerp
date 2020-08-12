import React, { Component } from 'react';
import './ProductFilter.css'


class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className={'filter ' +(this.props.open ? 'filter-open' : 'filter-closed')} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>
                                Filtros 
                            </h3>
                        <button onClick={() => this.props.handleFilterOpen()} className="btn btn-outline-primary"> Aplicar filtros</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductFilter;