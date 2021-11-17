import { useContext, useEffect } from 'react'
import { array, string } from 'prop-types'
import { Context } from '~src/context'

const Select = ({
  default: defaultValue,
  id,
  options,
  required,
  value: initialValue
}) => {
  const dataId = `field_${id}`
  const isRequired = required === '1'
  const { addData, state } = useContext(Context)
  const onChange = e => addData({ [dataId]: e.target.value })

  useEffect(() => {
    const value = initialValue || defaultValue
    addData({ [dataId]: value })
  }, [defaultValue, initialValue])

  return (
    <select
      aria-required={isRequired}
      id={id}
      name={id}
      onChange={onChange}
      required={isRequired}
      value={state[dataId]}
    >{
      options.map(({ label, value }) =>
        <option
          key={value}
          value={value}
        >
          {label}
        </option>
      )
    }
    </select>
  )
}

Select.propTypes = {
  id: string.isRequired,
  options: array,
  value: string
}

Select.defaultProps = {
  options: [],
  value: 'Option2'
}

export default Select
