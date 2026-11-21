import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "dark",
  className = "",
  ...props
}) {
  const styles =
    variant === "light"
      ? "bg-white text-ink hover:bg-lime"
      : variant === "outline"
        ? "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white"
        : "bg-ink text-white hover:bg-moss";
  const classes = `inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition duration-200 ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
