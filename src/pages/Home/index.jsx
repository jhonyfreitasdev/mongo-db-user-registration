import { useEffect, useState } from 'react';
import { createUser, deleteUsers, getUsers } from '../../services/users';
import trashIcon from '../../assets/icons/trash-icon.svg';
import './index.css'

function Home() {
  const [userList, setUserList] = useState();
  const [formInfo, setFormInfo] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers();
      setUserList(response);
    }

    fetchUsers();
  }, []);
  
  const updateForm = (e) => {
    const value = e.target.value;
    setFormInfo(prev => ({...prev, [e.target.name]: value }));
  };

  const handleCreateUser = async () => {
    const {response} = await createUser(formInfo);

    setUserList(prev => ([...prev, response]))
  };

  const handleDeleteUser = async (id) => {
    const response = await deleteUsers(id);
    console.log(response);
    setUserList(prev => prev.filter(user => user.id!== id));
  };

  return (
    <div className='container'>
      <form onSubmit={e => e.preventDefault()}>
        <h1>Cadastro de usuários</h1>

        <input placeholder='Nome' name="name" type="text" onChange={ updateForm } />
        <input placeholder='Email' name="email" type="email" onChange={ updateForm } />
        <input placeholder='Idade' name="age" type="number" onChange={ updateForm } />
        <button type="submit" onClick={handleCreateUser}>Cadastrar</button>
      </form>

        {userList?.map(({id, name, age, email}, i) => (
          <div className='card' key={ i } >
            <div> 
              <p>Nome: <span>{name}</span></p>
              <p>Email: <span>{email}</span></p>
              <p>Idade: <span>{age}</span></p>
            </div>

            <button onClick={() => handleDeleteUser(id)}>
              <img src={ trashIcon } alt="Imagem de lixeira" />
            </button>
          </div>
        ))}
      </div>
  )
}

export default Home
