import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';

function Page() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h1>Show Data - {state.user.name}</h1>
      <hr />
      <Link to="/">Ir para SignUp</Link>

    </div>
  )
}

export default Page;