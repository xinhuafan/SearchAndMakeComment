import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className='buy-store-container clear-fix'>
                <div className='item-container' float-left>
                    {
                        // collect or not
                        this.props.isStore 
                        ? <button className='selected' onClick={this.storeClickHandle.bind(this)}>Collected</button>
                        : <button onClick={this.storeClickHandle.bind(this)}>Collect</button>
                    }
                </div>
                <div>
                    <div className='item-container float-right'>
                        <button onClick={this.buyClickHandle.bind(this)}>Buy</button>
                    </div>
                </div>
            </div>
        )
    }

    buyClickHandle() {
        const buyHandle = this.props.buyHandle
        buyHandle()
    }

    storeClickHandle() {
        const storeHandle = this.props.storeHandle()
    }
}

export default BuyAndStore