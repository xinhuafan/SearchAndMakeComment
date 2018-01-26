import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { postComment } from '../../../fetch/user/orderlist.js'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2   // 0 - uncomment 1 - commenting 2 - commented
        }
    }

    render() {
        const data = this.props.data

        return (
            <div className='order-item-container'>
                <div className='clear-fix'>
                    <div className='order-item-img float-left'>
                        <img src={data.img}/>
                    </div>
                    <div className='order-item-comment float-right'>
                        {
                            this.state.commentState === 0
                            ? <button className='btn' onClick={this.showComment.bind(this)}>Comment</button>
                            : this.state.commentState === 1 
                            ? ''
                            : <button className='btn unselected-btn'>Commented</button>
                        }
                    </div>
                    <div className='order-item-content'>
                        <span>Company: {data.title}</span>
                        <span>Quantity: {data.count}</span>
                        <span>Price: ${data.price}</span>
                    </div>
                </div>
                {
                    // in comment progress
                    this.state.commentState === 1
                    ? <div className='comment-text-container'>
                        <textarea style={{width: '100%', height: '80px'}} className='comment-text' ref='commentText'></textarea>
                        <button className='btn' onClick={this.submitComment.bind(this)}>Submit</button>
                        &nbsp;
                        <button className='btn unselected-btn' onClick={this.hideComment.bind(this)}>Cancel</button>
                    </div>
                    : ''
                }
            </div>
        )
    }

    componentDidMount() {
        // update current state
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    showComment() {
        this.setState({
            commentState: 1
        }) 
    }

    submitComment() {
        // get operation function
        const submitComment = this.props.submitComment
        // get id
        const id = this.props.data.id
        // get comment
        const commentText = this.refs.commentText
        const value = commentText.value.trim()
        if (!value) {
            return
        }

        // submit
        submitComment(id, value, this.commentOk.bind(this))
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    hideComment() {
        this.setState({
            commentState: 0
        })
    }
}

export default Item