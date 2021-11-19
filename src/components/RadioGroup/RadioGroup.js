import { useState } from 'react'
import { array, func, oneOf, string } from 'prop-types'
import cx from 'classnames'
import Fieldset from '../Fieldset/Fieldset'
import Radio from './Radio'
import styles from './RadioGroup.module.css'

const RadioGroup = ({
  fields,
  id,
  legend,
  onClick,
  type,
  value: defaultValue
}) => {
  const [selected, setSelected] = useState(defaultValue)
  const handleClick = (value) => {
    setSelected(value)
    if (typeof onClick === 'function') onClick({ [id]: value })
  }
  const className = cx([
    styles.root,
    styles[type]
  ])
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
    <Fieldset className={className} legend={legend}>
      <ul>
        {RadioButtons}
      </ul>
    </Fieldset>
  )
}

RadioGroup.propTypes = {
  fields: array,
  id: string.isRequired,
  legend: string,
  onClick: func,
  type: oneOf([
    'radio',
    'pill'
  ]),
  value: string
}

RadioGroup.defaultProps = {
  fields: [],
  legend: null,
  onClick: null,
  type: 'radio',
  value: ''
}

export default RadioGroup
