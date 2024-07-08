// "use client"
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/ogabek542' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/ogabek-otaxonov-10b26025b/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/og.abek437/' },
  { icon: <FaTelegram />, path: 'https://t.me/Assassin_0221' },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
