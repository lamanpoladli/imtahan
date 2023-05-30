import React, { useState } from "react";
import { useFormik } from "formik";
import { postUser } from "../api/requests";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const AddUser = () => {

  const UserValidation = yup.object().shape({
    name: yup.string().required("name is required"),
    imageUrl: yup.string().required("imageUrl is required"),
    age: yup.number().required("age is required")
  });
  const navigate = useNavigate();
  const[users,setUsers] = useState([]);
  const handleSubmit = async(values, actions) => {
    console.log('test click');
    await postUser(values);
    setUsers([...users,values])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
      age: ""
    },
    validationSchema: UserValidation,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
          placeholder="enter imageUrl"
          type="text"
          name="imageUrl"
        />
        {formik.errors.imageUrl && formik.touched.imageUrl && (
          <span>{formik.errors.imageUrl}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          placeholder="enter age"
          type="text"
          name="age"
        />
        {formik.errors.age && formik.touched.age && (
          <span>{formik.errors.age}</span>
        )}
        <button style={{width:"600px",height:"50px",fontSize:"25px",backgroundColor:"#17a2b8",border:"none",borderRadius:"15px",margin:"5% auto",display:"block",boxShadow:"5px 10px 18px #888888"}}
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New User
        </button>
      </form>
  )
}

export default AddUser