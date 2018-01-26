import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe' // caresoul plugin
import { Link } from 'react-router'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        const opt = {
            auto: 2500,
            callback: function(index) {
                // update current page index for carousel effect
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id='home-category'>
                <ReactSwipe swipeOptions={opt}>
                    <div className='carousel-item'>
                        <ul className='clear-fix'>
                            <Link to='/search/jingdian'><li className='float-left jingdian'>View</li></Link>
                            <Link to='/search/ktv'><li className='float-left ktv'>KTV</li></Link>
                            <Link to='/search/gouwu'><li className='float-left gouwu'>Shopping</li></Link>
                            <Link to='/search/shenghuofuwu'><li className='float-left shenghuofuwu'>Living Service</li></Link>
                            <Link to='/search/jianshenyundong'><li className='float-left jianshenyundong'>Gym</li></Link>
                            <Link to='/search/meifa'><li className='float-left meifa'>Beauty</li></Link>
                            <Link to='/search/qinzi'><li className='float-left qinzi'>Blood-Relationship</li></Link>
                            <Link to='/search/xiaochikuaican'><li className='float-left xiaochikuaican'>Snacks</li></Link>
                            <Link to='/search/zizhucan'><li className='float-left zizhucan'>Buffer</li></Link>
                            <Link to='/search/jiuba'><li className='float-left jiuba'>Bar</li></Link>
                        </ul>
                    </div>
                    <div className='carousel-item'>
                        <ul className='clear-fix'>
                            <Link to='/search/meishi'><li className='float-left meishi'>Food</li></Link>
                            <Link to='/search/dianying'><li className='float-left dianying'>Moving</li></Link>
                            <Link to='/search/jiudian'><li className='float-left jiudian'>Hotel</li></Link>
                            <Link to='/search/xiuxianyule'><li className='float-left xiuxianyule'>Entertainment</li></Link>
                            <Link to='/search/waimai'><li className='float-left waimai'>Takeout</li></Link>
                            <Link to='/search/huoguo'><li className='float-left huoguo'>Hot-pot</li></Link>
                            <Link to='/search/liren'><li className='float-left liren'>Beauty</li></Link>
                            <Link to='/search/dujiachuxing'><li className='float-left dujiachuxing'>Travel</li></Link>
                            <Link to='/search/zuliaoanmo'><li className='float-left zuliaoanmo'>Massage</li></Link>
                            <Link to='/search/zhoubianyou'><li className='float-left zhoubianyou'>Short-Travel</li></Link>
                        </ul>
                    </div>
                    <div className='carousel-item'>
                        <ul className='clear-fix'>
                            <Link to='/search/ribencai'><li className='float-left ribencai'>Japanese Food</li></Link>
                            <Link to='/search/spa'><li className='float-left spa'>SPA</li></Link>
                            <Link to='/search/jiehun'><li className='float-left jiehun'>Wedding</li></Link>
                            <Link to='/search/xuexipeixun'><li className='float-left xuexipeixun'>Training</li></Link>
                            <Link to='/search/xican'><li className='float-left xican'>European Food</li></Link>
                            <Link to='/search/huochejipiao'><li className='float-left huochejipiao'>Train Ticket</li></Link>
                            <Link to='/search/shaokao'><li className='float-left shaokao'>Barbecue</li></Link>
                            <Link to='/search/jiazhuang'><li className='float-left jiazhuang'>Decoration</li></Link>
                            <Link to='/search/chongwu'><li className='float-left chongwu'>Pet</li></Link>
                            <Link to='/search/all'><li className='float-left quanbufenlei'>All</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className='index-container'>
                    <ul>
                        <li className={this.state.index === 0 ? 'selected' : ''}></li>
                        <li className={this.state.index === 1 ? 'selected' : ''}></li>
                        <li className={this.state.index === 2 ? 'selected' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category