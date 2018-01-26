import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )
    }

    componentDidMount() {
        // see if the current restaurant is saved
        this.checkStoreState()
    }

    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        store.forEach(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })

                return false
            }
        })
    }

    // check login status
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {

            // pass in target router when redirect to the login page, so it can return back after login
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }

        return true
    }

    // buy event
    buyHandle() {
        // check login
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        // simulate buy process

        // redirect to main page
        hashHistory.push('/User')
    }

    // store event
    storeHandle() {
        // check login
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            // cancel, if already stored
            storeActions.rm({id: id})
        } else {
            // store, if it is not stored 
            storeActions.add({id: id})
        }

        // update state
        this.setState({
            isStore: !this.state.isStore
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)