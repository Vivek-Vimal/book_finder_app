import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <section className="background_image">
          <div className="background_shade">
            <h2 className="welcome_title"><div>Click Below</div><div className="style"><div>To Enter In The World</div>Of Information</div></h2>
            <Link to="/Home"><button type="button" className="btnn">CLick Me</button></Link>
          </div>
        </section>
    )
}

export default Welcome
