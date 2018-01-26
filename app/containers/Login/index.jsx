import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }

    render() {
        return (
            <div>
                <Header title='Login'/>
                {
                    // display login info after login verification
                    this.state.checking
                    ? <div>{/* waiting...*/}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount() {
        this.doCheck()
    }

    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // redirect to user page after login
            this.goUserPage();
        } else {
            this.setState({
                checking: false
            })
        }
    }

    loginHandle(username) {
        // save username
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // redirect to specific page
            hashHistory.push(router)
        } else {
            // redirect to user page
            this.goUserPage()
        }
    }

    goUserPage() {
        hashHistory.push('/User')
    }
}

// bind redux and react
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)