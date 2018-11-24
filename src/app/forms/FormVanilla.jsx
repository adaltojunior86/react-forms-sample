import React from 'react';

class FormVanilla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let state = {};
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        state = { title: value };
        break;
      case 'description':
        state = { description: value }
        break;
      default:
        break;
    }
    this.setState(state);
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>Title:
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </label>
        <label>Description:
          <input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.state.description}
          />
        </label>
        <input type="submit" value="Save" />
      </form>
    )
  }
}

export default FormVanilla;