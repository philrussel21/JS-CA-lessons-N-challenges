import React from 'react';

class YellingGreeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ''
    };
  }

  handleOnChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  render() {
    const { message } = this.props;

    return (
      <div>
        <label>
          Say what you want
					<br />
          <input
            type="text"
            onChange={this.handleOnChange}
          >
          </input>
        </label>
        <h1>{message}</h1>
        <h2>{this.state.newMessage}</h2>
      </div>
    );
  }
}

export default YellingGreeter;