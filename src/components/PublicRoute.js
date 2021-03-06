import { Route, Redirect } from 'react-router';
import authSelectors from '../redux/auth-phonebook/auth-selectors';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {' '}
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
