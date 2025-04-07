"use client";

import SidebarComponent from "@/components/organisms/SidebarComponent";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsBriefcase, BsBuildings, BsCalendar4, BsGear } from "react-icons/bs";
import { FiLogOut, FiUsers } from "react-icons/fi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <SidebarComponent
              onClick={() => router.push("/")}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineHome className="mr-2 text-lg" /> Home
            </SidebarComponent>
            <SidebarComponent className="w-full justify-start rounded-none hover:text-primary">
              <AiOutlineMessage className="mr-2 text-lg" /> Messages
            </SidebarComponent>
            <SidebarComponent className="w-full justify-start rounded-none hover:text-primary">
              <BsBuildings className="mr-2 text-lg" /> Company Profile
            </SidebarComponent>
            <SidebarComponent className="w-full justify-start rounded-none hover:text-primary">
              <FiUsers className="mr-2 text-lg" /> All Applicant
            </SidebarComponent>
            <SidebarComponent
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/job-listings")}
            >
              <BsBriefcase className="mr-2 text-lg" /> Job Listing
            </SidebarComponent>
            <SidebarComponent className="w-full justify-start rounded-none hover:text-primary">
              <BsCalendar4 className="mr-2 text-lg" /> My Schedule
            </SidebarComponent>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div className="space-y-3">
              <SidebarComponent
                className="w-full justify-start rounded-none hover:text-primary"
                onClick={() => router.push("/settings")}
              >
                <BsGear className="mr-2 text-lg" /> Settings
              </SidebarComponent>
              <SidebarComponent
                className="w-full justify-start rounded-none hover:text-red-500 hover:bg-red-200"
                onClick={() => signOut()}
              >
                <FiLogOut className="mr-2 text-lg" /> Log out
              </SidebarComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
