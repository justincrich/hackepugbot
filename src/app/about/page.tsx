"use client";
import React from "react";
import { NextPage } from "next";
import { Header } from "@/components/Header";

const AboutPage: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <h1 className="title1 py-4">{`Nice to meet you!`}</h1>
      <p className="body1 mb-8">
        Here&apos;s a little 🎬 of what I&apos;m about...
      </p>
      <video className="px-8 w-full max-w-[900px] rounded" width={600} controls>
        <source src="/about_me.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default AboutPage;
