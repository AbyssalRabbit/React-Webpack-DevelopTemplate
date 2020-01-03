import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Index() {
    const history = useHistory();   //Hooks
    const linkToUrl = (url) => {
        history.push(url);
    };

    return (
        <div>
            <div>
                <Link to="/home">link to home</Link>
            </div>
            <div>
                <button onClick={()=>linkToUrl('home')}>home</button>
            </div>
        </div>
    );
}

export default Index;
