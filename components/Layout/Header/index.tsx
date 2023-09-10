'use client';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Text from '@/components/UI/Text';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';

function Header() {
  const { handleLogout } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  return (
    <div className="border-b h-14 flex justify-between items-center p-4">
      <div className="grid grid-cols-3 gap-2 w-[400px] justify-between">
        <div className="col-span-2">
          <Input type="text" placeholder="Cari Sesuatu..." />
        </div>
        <div className="w-20 col-span-1">
          <Button color="primary">Cari</Button>
        </div>
      </div>
      <div
        className="w-10 h-10 flex items-center justify-center font-medium rounded-full bg-secondary text-white hover:cursor-pointer"
        onClick={() => setIsDropdown(!isDropdown)}
      >
        IM
      </div>

      <AnimatePresence>
        {isDropdown && (
          <motion.div
            className="absolute right-12 top-12 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content bg-white p-2 rounded shadow-md w-32"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            >
              <div className=" w-full">
                <Button onClick={handleLogout} color="danger" textWeight="bold">
                  Logout
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
