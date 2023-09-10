'use client';

import LoginForm from '@/components/Form/LoginForm';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import { LoginResponse } from '../types';
import { handleLogin } from './actions';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setTimeout(async () => {
      const loginResponse = (await handleLogin(formData)) as LoginResponse;
      if (loginResponse.success) {
        localStorage.setItem('token', loginResponse.token);
        setIsLoading(false);
        toast.success('Logged in successfully');
        window.location.href = '/';
      } else {
        setIsLoading(false);
        toast.error('Login failed');
      }
    }, 1000);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-screen bg-white">
      <div
        className="h-screen overflow-hidden col-span-3 container mx-auto hidden lg:block"
        style={{
          background:
            'linear-gradient(180deg, #F06400 0%, #F06400 84.78754758834839%, #F06400 100%)',
        }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div>
            <Text
              size="ultra-large"
              weight="bold"
              type="title"
              color="light"
              align="center"
            >
              TrackHub
            </Text>

            <Text
              size="extra-large"
              weight="medium"
              color="light"
              align="center"
            >
              Advanced User Tracking for Your Startup
            </Text>
          </div>
          <div className="relative">
            <Image
              alt="ilutration_monitoring_man"
              width={384}
              height={384}
              src="https://res.cloudinary.com/dxczqkbzu/image/upload/v1694246374/Seeking_development_1_wlybid.gif"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center col-span-2 container mx-auto w-full">
        <div className="flex justify-center flex-col w-full">
          <Text size="ultra-large" weight="bold" color="primary">
            Start Your Adventure
          </Text>
        </div>
        <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

Login.layout = 'authentication';
export default Login;
