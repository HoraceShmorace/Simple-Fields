import styles from './Fieldset.module.css'

const Fieldset = ({ children, className, label: labelText }) => (
  <fieldset className={[ className, styles.root ].join(' ')}>
    {
      labelText && 
        <label className={styles.label}>
          {labelText}
        </label>
    }
    {children}
  </fieldset>
)

export default Fieldset
