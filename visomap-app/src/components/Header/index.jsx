import classes from "./styles.module.css";
import { MainMenu } from "../ui/Menu/index";

export function Header() {
  return (
    <div className={classes.box}>
      <MainMenu />
    </div>
  );
}
