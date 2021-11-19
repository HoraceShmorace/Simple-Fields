import { bool, func, number, oneOf, string } from 'prop-types'
import cx from 'classnames'
import styles from './Radio.module.css'

const Radio = ({ id, index, isDefaultSelected, label, onClick, type, value }) => {
  const uniqueId = `${id}_${index}`
  const className = cx([
    styles.root,
    styles[type],
    { [styles.checked] : isDefaultSelected}
  ])

  const handleClick = () => onClick(value)

  return (
    <li className={className}>
      <input
        defaultChecked={isDefaultSelected}
        id={uniqueId}
        name={id}
        onClick={handleClick}
        type='radio'
        defaultValue={value}
      />
      <button onClick={handleClick}>
        {type !== 'pillbar' && <div className={styles.indicator} />}
        {type === 'pillbar' && label}
      </button>
      {type !== 'pillbar' && <label htmlFor={uniqueId}>{label}</label>}
    </li>
  )
}

Radio.propTypes = {
  id: string.isRequired,
  index: number.isRequired,
  isDefaultSelected: bool,
  label: string.isRequired,
  onClick: func,
  type: oneOf([
    'radio',
    'pillbar'
  ]),
  value: string
}

Radio.defaultProps = {
  isDefaultSelected: false,
  onClick: null,
  type: 'radio',
  value: ''
}

export default Radio
