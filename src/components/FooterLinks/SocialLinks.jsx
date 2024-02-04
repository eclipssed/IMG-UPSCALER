import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <MdEmail />,
    link: "/",
  },
  {
    icon: <FaInstagram />,
    link: "/",
  },
  {
    icon: <FaTwitter />,
    link: "/",
  },
  {
    icon: <FaYoutube />,
    link: "/",
  },
];
const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-2 text-start">
      <h2 className="font-semibold text-2xl mb-4">Community</h2>
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map((link) => (
          <>
            <div
              key={link.link}
              className="bg-black text-white rounded-full p-2 hover:text-primary"
            >
              <a href={link.link}>{link.icon}</a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
