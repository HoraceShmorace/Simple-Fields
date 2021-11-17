import { useState } from 'react'
import { bool, func, number, string } from 'prop-types'
import Fieldset from '../Fieldset/Fieldset'
import styles from './Text.module.css'

const Text = ({ description, id, label, maxLength, onChange, placeholder, isRequired, type, value: defaultValue }) => {
  const [value, setValue] = useState(defaultValue)
  const handleChange = e => {
    const { id, value } = e.target.value
    
    setValue(value)

    if (typeof onChange === 'function') onChange({ [id]: value })
  }
  return (
    <Fieldset className={styles.root} description={description} label={label} htmlFor={id}>
     <input maxLength={maxLength} onChange={handleChange} placeholder={placeholder} required={isRequired} type={type} defaultValue={value} />
    </Fieldset>
  )
}

Text.propTypes = {
  description: string,
  id: string.isRequired,
  label: string,
  maxLength: number,
  onChange: func,
  placeholder: string,
  isRequired: bool,
  type: string,
  value: string
}

Text.defaultProps = {
  description: null,
  maxLength: 1028,
  onChange: null,
  placeholder: null,
  isRequired: null,
  type: 'text',
  value: ''
}

export default Text
