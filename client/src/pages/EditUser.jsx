import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUserById } from "../api/requests";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";



const EditUser = () => {
  const[users,setUsers] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(id).then((res) => {
      setUser(res);
      formik.values.name = res.name;
      formik.values.imageUrl = res.imageUrl;
      formik.values.age = res.age;
    });
  }, [id]);
  
  const handleEdit = async(values, actions) => {
    setUsers(values);
    await editUser(id,values);
    navigate('/');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: user.name,
      imageUrl: user.imageUrl,
      age: user.age
    },
    onSubmit: handleEdit,
  });
  return (
    <>
    <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {user.name} Edit
      </Typography>
      { <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder="author name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="author imageUrl"
          name="imageUrl"
          value={formik.values.imageUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          type="text"
          placeholder="author age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px',marginBottom:"5%",backgroundColor:"#17a2b8"}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
      </>
  )
}

export default EditUser