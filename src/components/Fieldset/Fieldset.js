import cx from 'classnames'
import styles from './Fieldset.module.css'

const Fieldset = ({ children, className, legend }) => {
  const classNames = cx([
    className,
    styles.root,
    { [styles['has-legend']]: legend }
  ])

  return (
    <fieldset className={classNames}>
      {
        legend && 
          <legend>
            {legend}
          </legend>
      }
      {children}
    </fieldset>
  )
}

export default Fieldset
