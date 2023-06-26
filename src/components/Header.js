import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../Store/Store';
import classes from './Header.module.css';


const Header = () => {

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { logOut, login } = authActions
  const dispatch = useDispatch();


  const handleLogin = () => {
    if (isLoggedIn) {
      dispatch(logOut());
    } else {
      dispatch(login())
    }
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => handleLogin()}>{isLoggedIn ? 'Logout' : 'Login'} </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
