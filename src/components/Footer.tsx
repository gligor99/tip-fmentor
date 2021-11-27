type Props = {
  name: String;
};

const Footer: React.FC<Props> = ({ name }) => {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/gligor99">{name}</a>.
    </div>
  );
};

export default Footer;
