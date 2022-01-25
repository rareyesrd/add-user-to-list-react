import styles from "./Button.module.css";

const Button = (props) => {
  const clasess = `${styles.button} ${props?.className}`;
  return <button className={clasess}>{props.children}</button>;
};

export default Button;
