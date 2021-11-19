import { useState } from 'react'
import { bool, func, number, string } from 'prop-types'
import Fieldset from '../Fieldset/Fieldset'
import styles from './TextArea.module.css'

const TextArea = ({ description, id, legend, maxLength, onChange, placeholder, isRequired, type, value: defaultValue }) => {
  const [value, setValue] = useState(defaultValue)
  const handleChange = e => {
    const { id, value } = e.target.value
    
    setValue(value)

    if (typeof onChange === 'function') onChange({ [id]: value })
  }

  return (
    <Fieldset className={styles.root} description={description} legend={legend} htmlFor={id}>
     <textarea maxLength={maxLength} onChange={handleChange} placeholder={placeholder} required={isRequired} type={type} defaultValue={value} />
    </Fieldset>
  )
}

TextArea.propTypes = {
  description: string,
  id: string.isRequired,
  isRequired: bool,
  legend: string,
  maxLength: number,
  onChange: func,
  placeholder: string,
  type: string,
  value: string
}

TextArea.defaultProps = {
  description: null,
  isRequired: null,
  legend: null,
  maxLength: 1028,
  onChange: null,
  placeholder: null,
  type: 'text',
  value: ''
}

export default TextArea
