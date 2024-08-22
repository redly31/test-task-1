import classes from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div className={classes.welcome}>
        <h1 className={classes.welcome__text}>Добро пожаловать</h1>
    </div>
  )
}
