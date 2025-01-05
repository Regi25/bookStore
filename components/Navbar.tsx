"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSignInClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };
  return (
    <header className="w-full absolut z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Book store"
            width={25}
            height={25}
            className="object-contain"
          />
          <div className="object-contain">Book store</div>
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue-100 rounded-full bg-white min-w-[130px]"
          handleClick={handleSignInClick}
        />
      </nav>
      {showNotification && (
        <div className="padding-x bg-primary-grey ">
          We are currently working on implementing the &apos;Sign in&apos;
          functionality. Thank you for your patience.
        </div>
      )}
    </header>
  );
};

export default Navbar;
