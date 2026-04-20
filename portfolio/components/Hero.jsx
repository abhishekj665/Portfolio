"use client";
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { profile_data } from "../project_data";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(profile_data.resumePath, "_blank");
  };

  return (
    <main className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col justify-center items-center gap-4">
      <section className="w-32 sm:w-45 md:w-56 lg:w-72 xl:w-80 h-auto rounded-2xl">
        <div className="rounded-2xl p-[4px] bg-[linear-gradient(135deg,#22d3ee,#4f46e5,#14b8a6)] shadow-2xl">
          <Image
            src={profile_data.profileImage}
            alt={profile_data.name}
            width={360}
            height={360}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl"
          />
        </div>
      </section>

      <section className="max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4 reveal-motion">
        <p className="lg:text-3xl text-2xl font-medium">Hi, I am</p>
        <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
          {profile_data.name}
        </h1>
        <h2 className="lg:text-4xl text-3xl font-medium">
          I am a {profile_data.role}
        </h2>
        <p className="lg:text-2xl text-lg text-slate-100">
          {profile_data.shortIntro}
        </p>

        <section className="flex flex-col gap-6">
          <section className="flex items-center gap-4 mt-3">
            <a
              href={profile_data.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my linkedin profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            <a
              href={profile_data.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my github profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black  hover:bg-black p-1.5 hover:text-white" />
            </a>
            <a
              href={profile_data.socials.x}
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my x profile"
            >
              <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            <a
              href={profile_data.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my instagram profile"
            >
              <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
            </a>
          </section>

          <section className="flex gap-4">
            <Link href={`mailto:${profile_data.email}`}>
              <button
                className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                aria-label="Contact Button"
              >
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button
              className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
              onClick={handleDownloadResume}
              aria-label="Resume Download Button"
            >
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Hero;
