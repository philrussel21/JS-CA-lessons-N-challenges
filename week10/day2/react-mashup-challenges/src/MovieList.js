import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteIcon from '@material-ui/icons/Delete';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements["movie-title"];
    const newMovies = [...this.state.movies];
    newMovies.push(input.value);
    this.setState({
      movies: newMovies
    });
  };

  handleClick = (e) => {
    const target = e.target.name;
    const { movies } = this.state;
    const newMovies = movies.filter(movie => movie !== target);
    this.setState({
      movies: newMovies
    });
  };


  render() {
    const { movies } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography>
            Add a movie
        </Typography>
          <TextField id="movie-title" name="movie-title" label="Movie Title" />
          <Button variant="contained" color="primary" type="submit">
            <AddCircleIcon />
          </Button>
        </form>

        <List>
          <ListSubheader>
            Movie Titles
          </ListSubheader>

          {movies.map((movie, i) => (
            <ListItem key={i}>
              <ListItemText>
                {movie}
              </ListItemText>
              <Button variant="contained" name={movie} color="secondary" onClick={this.handleClick}>

                <DeleteIcon name={movie} onClick={this.handleClick} />
              </Button>
            </ListItem>
          ))
          }
        </List>
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"]
};

export default MovieList;