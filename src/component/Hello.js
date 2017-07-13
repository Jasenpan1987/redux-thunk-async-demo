import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInitalText } from '../actions';

import JsonFetcher from './JsonFetcher';

class Hello extends Component {
    constructor (props) {
        super (props);
    }

    componentDidMount() {
        this.props.getInitalText();
    }

    render () {
        return (
            <div>
                <h3>{ this.props.helloWorld.greet }</h3>
                <JsonFetcher />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        helloWorld: state.helloWorld
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getInitalText: () => dispatch(getInitalText())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);