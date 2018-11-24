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
        state = { description: value };
        break;
      default:
        break;
    }
    this.setState(state);
  }

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            name="title"
            onChange={this.onChange}
            value={title}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            title="description"
            onChange={this.onChange}
            value={description}
          />
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default FormVanilla;
