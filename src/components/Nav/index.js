import React from 'react'
import Navitem from './Navitems'
import graph from "../../icons/graph.svg";
import "./index.css"

function Nav({ navData }) {
    return (
        <div className='sidenav'>
            <div className='sidenavimg'>
                <img src={graph} />
            </div>
            {
                navData.length > 0 &&
                navData.map((navitem, index) => {
                    return <Navitem key={index} navitem={navitem} />
                })

            }


        </div>

    )
}

export default Nav