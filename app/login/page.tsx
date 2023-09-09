"use client"

import Text from "@/components/ui/Text"
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { handleLogin } from "./actions";

const Login = () => {
  
  const onSubmit = (formData: FormData) => { 
    console.log(formData);
    
    // handleLogin(formData)
  }
  return (
    <div
      className="grid grid-cols-5 w-full h-screen bg-white"
    >
      <div className="h-screen overflow-hidden col-span-3 container mx-auto" style={{
            background:
              "linear-gradient(180deg, #F06400 0%, #F06400 84.78754758834839%, #F06400 100%)",
          }}>
        <div className="h-full flex flex-col items-center justify-center">
        <div>
            <Text size="ultra-large" weight="bold" type="title" color="light" align="center">
            TrackHub
            </Text>

            <Text size="extra-large" weight="medium" color="light" align="center">
            Advanced User Tracking for Your Startup
            </Text>
        </div>
      <div className="relative">
        <Image  alt="ilutration_monitoring_man" width={384} height={384} src="https://res.cloudinary.com/dxczqkbzu/image/upload/v1694246374/Seeking_development_1_wlybid.gif" />
      </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center col-span-2 container mx-auto w-full">
        <div className="flex justify-center flex-col w-full">
          <Text size="ultra-large" weight="bold" color="primary">
          Start Your Adventure
          </Text>
        </div>
        <form action={onSubmit} className="w-full">
          <div className="flex flex-col gap-4 w-full">
          <Input placeholder="Email" type="email"
            isRequired
            />
          <Input placeholder="Password" type="password" 
            isRequired
          />
        </div>
        <div className="w-full mt-4">
          <Button textWeight="bold" color="primary" size="normal">Login</Button>
        </div>
        </form>
      </div>
    </div>
  );
};


export default Login;