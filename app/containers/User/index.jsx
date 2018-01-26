import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                <Header title='user page' backRouter='/home'/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }

    componentDidMount() {
        // redirect to login page if not login
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
    }
}

// bind react and redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
// require.ensure for async loading，not support ES6 export 
// export default User
