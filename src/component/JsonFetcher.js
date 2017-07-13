import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchJson } from '../actions';

class JsonFetcher extends Component {
    fetchJsonHandler = () => {
        this.props.getJson();
    }

    renderResult = () => {
        switch (this.props.jsonResult.status) {
            case 'pending': 
            return (<div>Loading...</div>);
            
            case 'success': 
            return (<div>{JSON.stringify(this.props.jsonResult.data)}</div>);

            case 'error': 
            return (<div>{JSON.stringify(this.props.jsonResult.error)}</div>);

            default: 
            return null;
        }
    }

    render () {
        return (
            <div>
                <hr/>
                <h4>Fetch JSON</h4>
                <button
                    disabled={this.props.jsonResult.status === 'pending'}
                    onClick={this.fetchJsonHandler}
                >Fetch Json</button>
                <div>
                    {this.renderResult()}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        jsonResult: state.fetchJson
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getJson: () => dispatch(fetchJson())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFetcher);