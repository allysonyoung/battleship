import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      code: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    window.user_name = this.state.name;
    window.table_name = this.state.code;
    console.log(window.user_name);
    console.log(window.table_name)
    e.preventDefault();
  }

  render() {
    const styles = {
      'backgroundColor': 'grey',
      'height': '350px',
      'margin': '0 auto',
      'textAlign': 'center',
      'width': '800px'
    }

    const formStyles = {
      'display': 'flex',
      'flexDirection': 'column',
      'fontSize': '25px',
      'margin': '0 auto',
      'paddingTop': '55px',
      'textAlign': 'center',
      'width': '300px'
    }

    console.log(this.state)
    return (
      <div style={styles}>
        <form style={formStyles} onSubmit={this.handleSubmit}>
          <label>Set Name:
            <input name="name" type="text"
            onChange={this.handleChange} />
          </label>
          <label>Enter Game Code:
            <input name="code" type="text"
            onChange={this.handleChange} />
          </label>
          <input type="submit" value="Start" />
        </form>
      </div>
    );
  }
}
