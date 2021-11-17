import { useState } from 'react'
import { bool, func, oneOf, string } from 'prop-types'
import cx from 'classnames'
import styles from './Checkbox.module.css'

const Checkbox = ({ description, id, isDefaultChecked, labelFirst, label, onClick, type, value }) => {
  const [isChecked, setIsChecked] = useState(isDefaultChecked)
  const className = cx([
    styles.root,
    styles[type],
    { [styles.checked] : isChecked},
    labelFirst ? styles['label-before'] : styles['label-after']
  ])
  
  const toggleClick = () => {
    const nextIsChecked = !isChecked
    setIsChecked(nextIsChecked)
    if (typeof onClick === 'function') onClick(nextIsChecked)
  }

  return (
    <li className={className}>
      <input id={id} type="checkbox" value={value} defaultChecked={isChecked} onClick={toggleClick} />
      {
        labelFirst && 
        <label htmlFor={id}>
          {label}
        </label>
      }
      <button onClick={toggleClick}>
        <div className={styles.indicator} />
      </button>
      {
        !labelFirst && 
        <label htmlFor={id}>
          {label}
        </label>
      }
    </li>
  )
}

Checkbox.propTypes = {
  description: string,
  id: string.isRequired,
  isDefaultChecked: bool,
  labelFirst: bool,
  label: string,
  onClick: func,
  type: oneOf([
    'checkbox',
    'switch',
    'pills'
  ]),
  value: string
}

Checkbox.defaultProps = {
  description: null,
  isDefaultChecked: false,
  labelFirst: false,
  label: null,
  onClick: null,
  type: 'checkbox',
  value: ''
}

export default Checkbox
