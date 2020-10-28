import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      user: this.props.user,
      logoutCB: null
    };
  };

  static getDerivedStateFromProps(props, state) {
    if (state !== props) {
      return props;
    }
  }

  render() {
    const { isLoggedIn, logoutCB } = this.state;
    console.log(this.state);
    const authBtn = isLoggedIn ? (
      <Button variant="contained" color="secondary" onClick={logoutCB}>
        Logout
      </Button>
    ) : (
        <Link to="/login">
          <Button variant="contained">
            Login
        </Button>
        </Link>
      );
    return authBtn;
  }
}

// Auth.defaultProps = {
//   isLoggedIn: false,
//   user: null
// };

export default Auth;