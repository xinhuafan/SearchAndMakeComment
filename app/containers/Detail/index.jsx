import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/buy'
import Comment from './subpage/Comment'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        // get merchant id
        const id = this.props.params.id

        return (
            <div>
                <Header title='Merchant Info' type='share'/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}

export default Detail