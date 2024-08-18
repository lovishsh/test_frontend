"use client";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useMutation } from "@tanstack/react-query";
import { login, logout, tenantDetails } from "@/api/authRoutes";
import { useSnackbar } from "@/contexts/SnackbarContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const {showSnackbar}=useSnackbar();
  const router=useRouter();
   const handleClick=async()=>{
    const response=await tenantDetails();
    console.log(response);
   }
   const handleLogout=async()=>{
    const response=await logout();
    console.log(response);
   }

  const [formData,setFormData]=useState({
    email:'',
    password:""
  })
  const handleChange=(e)=>{
     const {name,value}=e.target;
     setFormData((prev)=>({
      ...prev,
      [name]:value

     }))
  }
  const { mutate, error, isError } = useMutation({
    mutationFn: (formData) => login(formData), // Ensure the login function is called
    onSuccess: async(data) => {
     
      showSnackbar(data?.message , 'success');
      // router.push('/dashboard/home')
    },
    onError: (error) => {
      console.log(error,"error");
      showSnackbar(error.response?.data?.error , 'error'); // Show error Snackbar
    },
  });
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };
  
  return (
    <div>
      <Grid container spacing={2} sx={{ height: "100vh", bgcolor: "#F9E6E6" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: { xs: "100%", sm: "100%", md: "60%" },
            }}
          >
            <Typography
              sx={{
                color: "#474BCA",
                fontFamily: "'Itim',cursive",
                fontWeight: 600,
                letterSpacing: "2px",
                mb: { xs: "10px", sm: "20px", md: "30px" },
                mt: { xs: "10px", sm: "20px", md: "50px" },
                fontSize: { xs: "14px", sm: "16px", md: "30px" },
              }}
            >
              EducareBook
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: "10px", sm: "20px", md: "30px" },
                fontSize: { xs: "14px", sm: "16px", md: "70px" },
              }}
            >
              Login now
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: { xs: "10px", sm: "20px", md: "30px" },
              }}
            >
              Hi, Welcome back
            </Typography>
            <Button
              sx={{
                bgcolor: "#FFA3BE",
                color: "#FFFFFF",
                fontSize: { xs: "14px", sm: "16px", md: "25px" },
                textTransform: "none",
                borderRadius: "7px",
                mb: { xs: "10px", sm: "20px", md: "50px" },
                "&:hover": {
                  bgcolor: "#FFA3BE",
                  color: "#FFFFFF",
                },
              }}
              startIcon={
                <img
                  src="/images/google.png"
                  style={{ width: "40px", height: "40px" }}
                />
              }
            >
              Login with Google
            </Button>
            <Divider
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", color: "gray" },
                mb: { xs: "10px", sm: "20px", md: "30px" },
              }}
            >
              or Login With Email
            </Divider>
            <Box sx={{ mb: { xs: "10px", sm: "20px", md: "30px" } }}>
              <Typography
                variant="h5"
                sx={{ mb: { xs: "10px", sm: "20px", md: "30px" } }}
              >
                Email
              </Typography>
              <TextField
                sx={{
                  bgcolor: "#FFA3BE",
                  input: {
                    marginLeft: "20px",
                    border: "none",
                  },
                }}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email id"
                fullWidth
              />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ mb: { xs: "10px", sm: "20px", md: "30px" } }}
              >
                Password
              </Typography>
              <TextField
                sx={{
                  bgcolor: "#FFA3BE",
                  input: {
                    marginLeft: "20px",
                    border: "none",
                  },
                }}
                onChange={handleChange}
                name="password"
                value={formData.password}
                type="password"
                placeholder="Enter your password"
                fullWidth
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: { xs: "10px", sm: "20px", md: "30px" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox defaultChecked />
                <Typography variant="h6">Remember me</Typography>
              </Box>
              <Link
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "14px",
                    md: "20px",
                  },

                  color: "#474BCA",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "'Inter',sans-serif",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                forgot password?
              </Link>
            </Box>
            <Button
              sx={{
                mt: { xs: "10px", sm: "20px", md: "30px" },
                bgcolor: "#474BCA",
                color: "white",
                padding: { xs: "5px 0px", sm: "10px 0px", md: "15px 0px" },
                "&:hover": {
                  bgcolor: "#474BCA",
                  color: "white",
                },
                fontSize: { xs: "14px", sm: "16px", md: "25px" },
                borderRadius: "15px",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Box
              sx={{
                mt: { xs: "5px", sm: "10px", md: "15px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "14px", sm: "16px", md: "25px" } }}
              >
                Not registered yet?
              </Typography>
              <Link
                sx={{
                  color: "#474BCA",
                  textDecoration: "none",
                  fontSize: { xs: "14px", sm: "16px", md: "25px" },
                }}
              >
                Create an account
              </Link>
              <Link
                sx={{
                  color: "#FFA3BE",
                  textDecoration: "none",
                  fontSize: { xs: "14px", sm: "16px", md: "25px" },
                }}
              >
                SignUp
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: { xs: "100%", sm: "100%", md: "60%" },
            }}
          >
            <Box
              sx={{
                mt: {
                  xs: "10px",
                  sm: "20px",
                  md: "50px",
                  display: "flex",
                  justifyContent: "flex-end",
                },
              }}
            >
              <Button
                sx={{
                  bgcolor: "#474BCA",
                  color: "white",
                  padding: { xs: "5px 20px", sm: "10px 30px", md: "10px 50px" },
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#474BCA", color: "white" },
                  
                }}
                onClick={handleClick}
              >
                Sign Up
              </Button>
              <Button
                sx={{
                  bgcolor: "#474BCA",
                  color: "white",
                  padding: { xs: "5px 20px", sm: "10px 30px", md: "10px 50px" },
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#474BCA", color: "white" },
                  
                }}
                onClick={handleLogout}
              >
               Logout
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="/images/web.png"
                style={{ width: "500px", height: "500px" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
