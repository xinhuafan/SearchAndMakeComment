import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data}/>
                    : <div>{/* loading... */}</div>
                }
            </div>
        )
    }

    componentDidMount() {
        // get ad data
        const result = getAdData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // handle data
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            if (__DEV__) {
                console.log('homepage get ad data error, ', ex.message)
            }
        })
    }
}

export default Ad