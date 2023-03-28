import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';

function Page() {
  const { state, dispatch } = useContext(Context);

  const handleChangeName = () => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: { name: 'Marcelino' }
    });
  };

  return (
    <div>
      <h1>Sign Up {state.user.name} que tem {state.user.age}</h1>
      <hr />
      <p><button onClick={handleChangeName}>Alterar Nome</button></p>
      <Link to="/exibir">Ir para ShowData</Link>
    </div>
  )
}

export default Page;