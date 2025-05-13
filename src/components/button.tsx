/* css */
import "../css/components/button.css";

/* props */
interface ButtonProps {
  title: string;
  link: string;
  className: string;
}

/* template */
export default function Button({ title, link, className }: ButtonProps) {
  return (
    <a
      className={`${className}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      { title }
    </a>
  );
}
