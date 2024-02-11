const FooterLinks = ({ links, title }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-2xl mb-4">{title}</h2>
      <ul className="flex flex-col justify-start text-start space-y-2">
        {links.map((link) => (
          <li key={link.name} className="hover:text-black whitespace-nowrap">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
