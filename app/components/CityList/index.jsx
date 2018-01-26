import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className='city-list-container'>
                <h3>Hot Cities</h3>
                <ul className='clear-fix'>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Bei Jing')}>Bei Jing</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Shang Hai')}>Shang Hai</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Hang Zhou')}>Hang Zhou</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Guang Zhou')}>Guang Zhou</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Su Zhou')}>Su Zhou</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Shen Zheng')}>Shen Zheng</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Nan Jing')}>Nan Jing</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Tian Jing')}>Tian Jing</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Chong Qing')}>Chong Qing</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Xia Men')}>Xia Men</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Wu Han')}>Wu Han</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Xi An')}>Xi An</span>
                    </li>
                </ul>
            </div>
        )
    }

    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

export default CityList