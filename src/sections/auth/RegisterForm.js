import React from 'react'
import * as Yup from "yup";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { LoadingButton } from "@mui/lab";

const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);

//   const {isLoading} = useSelector((state) => state.auth);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string(),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "demo@tawk.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
    //   dispatch(LoginUser(data));
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
            {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}

            <Stack direction={{xs: 'column', sm:'row'}} spacing={2}>
                <RHFTextField name='firstName' label='First Name' />                    
                <RHFTextField name='lastName' label='Last Name' />                    
            </Stack>

            <RHFTextField name='email' label='Email address' /> 
            <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> 
        </Stack>

        <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        // loading={isLoading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </LoadingButton>
    </FormProvider>
  )
}

export default RegisterForm
