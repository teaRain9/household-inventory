import classes from './checkbox.module.scss'

function CheckboxIcon() {
  return (
    <div className={classes.checkbox_wrapper_31}>
      <input  type="checkbox"/>
      <svg viewBox="0 0 35.6 35.6">
        <circle className={classes.background} cx="17.8" cy="17.8" r="17.8"></circle>
        <circle className={classes.stroke} cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline className={classes.check} points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
    </div>
  );
}

export default CheckboxIcon;