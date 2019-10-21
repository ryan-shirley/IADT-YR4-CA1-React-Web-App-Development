import React from 'react';
import {Link} from 'react-router-dom';

class CryptoCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.coin.name + ' (' + this.props.coin.symbol + ')',
            currency: '€',
            price: this.props.coin.quote.EUR.price.toFixed(2),
            description: this.props.coin.metadata.description,
            logo: this.props.coin.metadata.logo,
            link: "coin/" + this.props.coin.slug
        }
    }

    render() {
        return (
            <div className="card text-white bg-primary crypto-card mb-4">
                <div className="card-body">
                    <h5 className="card-title float-left">{this.state.name}</h5>
                    <p className="price float-right"><span className="currency">{this.state.currency}</span>{this.state.price}</p>

                    <div className="clearfix"></div>

                    <p className="card-text">{this.state.description.substring(0, 170)}...</p>
                </div>
                <hr />
                <div className="card-body">
                    <img src={this.state.logo} alt={this.state.name} className="rounded-circle float-left" width="25" />
                    <p className="float-left ml-3">Read more about {this.state.name}</p>
                    <Link to={{
                        pathname: this.state.link,
                        state: this.props.coin
                        }} className="btn btn-sm btn-light float-right text-uppercase" role="button" aria-disabled="true">More info</Link>
                </div>
            </div>
        )
    }
}

export default CryptoCard