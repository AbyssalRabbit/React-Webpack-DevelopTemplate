import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class Index extends PureComponent {
    linkToUrl(url) {
        this.props.history.push(url)
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/home">link to home</Link>
                </div>
                <div>
                    <button onClick={this.linkToUrl.bind(this, 'home')}>home</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Index)
