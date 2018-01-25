import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className} >
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        {touched && error ? <div className="alert alert-danger">{error}</div> : <div></div>}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row main">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="col-md-8 offset-md-2">
          <Field
            name="title"
            component={this.renderField}
            label="Title"
            type="text"
          />
          <Field
            name="categories"
            component={this.renderField}
            label="Categories"
            type="text"
          />
          <Field
            name="content"
            component={this.renderField}
            label="Content"
            type="text"
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values);
  const errors = {};

  // Validate the inputs from 'values'
  if(!values.title || values.title.length < 3) {
    errors.title = "Enter a valid title!";
  }
  if(!values.categories) {
    errors.categories = "Enter a category!";
  }
  if(!values.content) {
    errors.content = "Enter some content!";
  }

  // If !errors, then submit form
  // If errors, then redux form assumes invalid
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
