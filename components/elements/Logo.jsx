"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "@/components/elements/IconButton";
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/"); //home으로 이동하는 로직
  };

  const onClickMenu = () => {
    //
  };

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;
