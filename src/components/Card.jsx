import './Card.css'


const Card = ({user}) => {
 
  return (
    <div className='card'>
        
        <h4>Hola {user.nombre? user.nombre : ''}</h4>
        <h4>Su password es: {user.password ? user.password : ''}</h4>

    </div>
  )
}

export default Card