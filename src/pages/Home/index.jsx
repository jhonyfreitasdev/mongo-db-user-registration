import trashIcon from '../../assets/icons/trash-icon.svg';
import './index.css'

function Home() {
  const users = [
    {
      name: 'Jhony',
      age: 20,
      email: 'jhony.com'
    },
    {
      name: 'Maria',
      age: 22,
      email: 'maria.com'
    }       
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>

        <input placeholder='Nome' name="name" type="text" />
        <input placeholder='Email' name="email" type="email" />
        <input placeholder='Idade' name="age" type="number" />
        <button type="submit">Cadastrar</button>
      </form>

        {users.map(({name, age, email}, i) => (
          <div className='card' key={ i } >
            <div> 
              <p>Nome: <span>{name}</span></p>
              <p>Email: <span>{email}</span></p>
              <p>Idade: <span>{age}</span></p>
            </div>

            <button>
              <img src={ trashIcon } alt="Imagem de lixeira" />
            </button>
          </div>
        ))}
      </div>
  )
}

export default Home
