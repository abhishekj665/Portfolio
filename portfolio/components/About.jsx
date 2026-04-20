import { FaInstagram, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMongodb, SiMysql } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "../app/globals.css";
import Link from "next/link";
import { profile_data } from "../project_data";

const About = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 justify-between items-center"
      id="about"
    >
      <section className="flex items-center gap-4 pt-3 reveal-motion">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-xl lg:text-2xl font-semibold section-heading-gradient">
          Professional Profile
        </p>
      </section>

      <section className="flex flex-col-reverse lg:flex-row lg:p-6 p-4 gap-6 mt-6">
        <section className="w-full p-2 rounded-xl py-6 lg:py-0.5 shadow-sm flex flex-col max-md:gap-6 card lg:p-4">
          <section className="flex items-center gap-4 h-1/5 reveal-motion">
            <hr className="h-1 w-16 bg-gray-600 rounded-full" />
            <p className="text-xl lg:text-2xl font-semibold section-heading-gradient">
              Core Skills
            </p>
          </section>

          <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
            <section className="flex justify-center items-center flex-col">
              <RiJavascriptFill size={50} className=" text-yellow-500" />
              Javascript
            </section>
            <section className="flex justify-center items-center flex-col">
              <FaReact size={50} className=" text-sky-500" /> React JS
            </section>
            <section className="flex justify-center items-center flex-col">
              <FaHtml5 size={50} className=" text-orange-500" />
              HTML
            </section>
            <section className="flex justify-center items-center flex-col">
              <IoLogoCss3 size={50} className=" text-blue-500" />
              CSS
            </section>
          </section>

          <section className="p-2 flex gap-6 justify-center flex-wrap h-1/3 text-lg">
            <section className="flex justify-center items-center flex-col">
              <FaNodeJs size={45} className=" text-green-500" /> Node Js
            </section>
            <section className="flex justify-center items-center flex-col">
              <SiMongodb size={45} className=" text-green-500" /> MongoDB
            </section>
            <section className="flex justify-center items-center flex-col">
              <SiMysql size={45} className=" text-cyan-500" />
              MySql
            </section>
          </section>
        </section>

        <section className="w-full p-3 flex flex-col justify-start gap-4 text-xl  rounded-xl py-6 shadow-sm lg:p-6 card">
          <section className="flex items-center  gap-4 reveal-motion">
            <hr className="h-1 w-16 bg-gray-700 rounded-full" />
            <p className="font-semibold text-xl lg:text-2xl section-heading-gradient">
              Background
            </p>
          </section>
          <p className="lg:text-xl text-lg text-black font-normal">{profile_data.about}</p>

          <section className="flex max-md:flex-col gap-6 md:items-center">
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
                <PiGithubLogoFill className=" transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
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
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default About;
