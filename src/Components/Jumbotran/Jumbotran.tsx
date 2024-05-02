// Jumbotron of the Home page

import './Jumbotron.scss'
import Data from '../../JSON/Jamutron.json'

const Jumbotran = () => {
  return (
    <div className='wrapper'>
      {
        Data.map((values) => (
            <div key={values.id} className='item'>
                <div className={`jumbotron ${values.direction}`}>
                    <div className="jumbotron__wrapper">
                        <h1 className='jumbotron__title'>{values.title}</h1>
                        <h2 className='jumbotron__subtitle'>{values.subTitle}</h2>
                    </div>

                <div className="jumbotron__image">
                    <img src={values.image} alt={values.alt} />
                </div>

                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Jumbotran
