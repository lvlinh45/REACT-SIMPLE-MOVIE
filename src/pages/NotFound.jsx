import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-[80px] flex flex-col items-center justify-center">
      <h3 className="text-[128px]">404</h3>
      <p className="text-[64px] mb-16">Page Not Found!</p>
      <Button
        className="flex items-center justify-center text-[18px]"
        onClick={() => navigate(`/`)}
        bgColor={"secondary"}
      >
        <svg
          width="38"
          height="22"
          viewBox="0 0 38 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.7932 11.1579H2.43329"
            stroke="white"
            strokeWidth="3.05263"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9433 20.3158L2.43329 11.1579L14.9433 2"
            stroke="white"
            strokeWidth="3.05263"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-2">Go to homepage</span>
      </Button>
    </div>
  );
};

export default NotFound;
