import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import React from 'react';

interface LoginFormProps {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}
function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  return (
    <form action={onSubmit} className="w-full">
      <div className="flex flex-col gap-4 w-full">
        <Input placeholder="Username" type="text" isRequired name="username" />
        <Input
          placeholder="Password"
          type="password"
          isRequired
          name="password"
        />
      </div>
      <div className="w-full mt-4">
        <Button
          textWeight="bold"
          color="primary"
          size="normal"
          loading={isLoading}
          disabled={isLoading}
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
