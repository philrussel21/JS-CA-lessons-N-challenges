import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Login(props) {
  const { eventHandler } = props;

  return (
    <form onSubmit={eventHandler}>
      <Card>
        <CardContent>
          <Typography>
            Login
        </Typography>
          <TextField id="email" name="email" label="Email" type="text" />
          <TextField id="password" name="password" label="Password" type="password" />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}