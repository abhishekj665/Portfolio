import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { profile_data } from "../project_data";

const Footer = () => {
  const social = [
    { id: 1, name: "LinkedIn", link: profile_data.socials.linkedin },
    { id: 2, name: "GitHub", link: profile_data.socials.github },
    { id: 3, name: "X", link: profile_data.socials.x },
    { id: 4, name: "Instagram", link: profile_data.socials.instagram },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="p-2 lg:p-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/footer/wave.svg')" }}
    >
      <section className="w-full lg:p-4 p-2 flex flex-col lg:flex-row gap-8">
        <section className="p-2 w-full flex flex-col items-center">
          <span className="font-semibold ">Location</span>
          <section className="p-2 flex flex-col items-center w-fit gap-2 text-gray-800">
            <span className="flex gap-1 items-center">
              <FaLocationDot color="#fff" />
              <address className="text-white">{profile_data.location}</address>
            </span>
            <span className="flex gap-2 items-center">
              <IoIosMail className="text-xl" />
              <Link
                className="text-white"
                href={`mailto:${profile_data.email}`}
              >
                {profile_data.email}
              </Link>
            </span>
          </section>
        </section>

        <section className="p-2 w-full flex flex-col items-center">
          <span className="font-semibold">Social Links</span>
          <section className="p-2 flex flex-wrap w-4/5 justify-center gap-3 text-gray-800">
            {social.map((item) => (
              <span key={item.id}>
                <Link
                  href={item.link}
                  className="flex gap-1 justify-center text-white"
                  target="_blank"
                >
                  {item.name}&nbsp;
                  <FaExternalLinkAlt />
                </Link>
              </span>
            ))}
          </section>
        </section>
      </section>
      <section className="p-2 text-center">
        <p>
          &copy; {currentYear}{" "}
          <span className="text-black font-semibold underline">
            {profile_data.name}
          </span>
          . All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
