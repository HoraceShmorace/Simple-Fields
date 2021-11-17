import { useState } from 'react'
import { array, func, oneOf, string } from 'prop-types'
import Fieldset from '../Fieldset/Fieldset'
import Radio from './Radio'
import styles from './RadioGroup.module.css'

const RadioGroup = ({
  fields,
  id,
  label,
  onClick,
  type,
  value: defaultValue
}) => {
  const [selected, setSelected] = useState(defaultValue)
  const handleClick = (value) => {
    setSelected(value)
    if (typeof onClick === 'function') onClick({ [id]: value })
  }

  const RadioButtons = fields.map((props, index) => (
    <Radio
      {...props}
      key={`${id}_${index}`}
      id={id}
      index={index}
      isDefaultSelected={props.value === selected}
      onClick={handleClick}
      type={type}
    />
  ))

  return (
    <Fieldset className={styles.root} label={label}>
      <ul>
        {RadioButtons}
      </ul>
    </Fieldset>
  )
}

RadioGroup.propTypes = {
  fields: array,
  id: string.isRequired,
  onClick: func,
  type: oneOf([
    'radio',
    'pill'
  ]),
  value: string
}

RadioGroup.defaultProps = {
  fields: [],
  onClick: null,
  type: 'radio',
  value: ''
}

export default RadioGroup
