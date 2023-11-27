import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import { Link, Stack, Typography } from '@mui/material'
import RegisterForm from '../../sections/auth/RegisterForm';
import AuthSocials from '../../sections/auth/AuthSocials';

const Register = () => {
  return (
    <>
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant='h4'>Get Started with Tawk</Typography>

        <Stack direction='row' spacing={0.5} alignItems='center'>
            <Typography variant='body2'>Already have an account?</Typography>
            <Link component={RouterLink} to='/auth/login' variant='subtitle2'>Sign in</Link>
        </Stack>

        {/* Register Form */}

        <RegisterForm />

        <Typography component={'div'} sx={{color:'text.secondary', mt:3, typography:'caption', textAlign:'center'}}>
            {'By Signing up, I agree to '}
            <Link underline='always' color='text.primary'>
                Term of Services
            </Link>
            {' and '}
            <Link underline='always' color='text.primary'>
                Privacy and policy
            </Link>
        </Typography>

        <AuthSocials />
    </Stack>
    </>
  )
}

export default Register
