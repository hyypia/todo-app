import React from 'react';
import { useFormik } from 'formik';

const AddItemPanel = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      action: '',
    },

    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm({ action: '' });
    },

    validate: (values) => {
      const errors = {};

      if (!values.action) {
        errors.action = 'Requred';
      } else if (values.action.length < 1) {
        errors.action = 'Requred';
      }

      return errors;
    },
  });

  return (
    <div>
      <form
        className="form-group d-flex mt-3 mb-0"
        onSubmit={formik.handleSubmit}
      >
        <input
          id="action"
          name="action"
          type="text"
          placeholder="Type to Add"
          className="form-control mr-1"
          value={formik.values.action}
          onChange={formik.handleChange}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
      {formik.errors.action ? (
        <div className="text-danger m-0 ml-3">{formik.errors.action}</div>
      ) : null}
    </div>
  );
};

export default AddItemPanel;
