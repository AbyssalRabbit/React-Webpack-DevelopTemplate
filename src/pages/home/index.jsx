import React from 'react'
import ShowText from '../../components/home/ShowText'
import { Link } from 'react-router-dom'

class Index extends React.Component {
    render() {
        return (
            <div>
                <ShowText />
                <div>
                    <Link to="/navigation">link to navigation</Link>
                </div>
            </div>
        );
    }
}

export default Index