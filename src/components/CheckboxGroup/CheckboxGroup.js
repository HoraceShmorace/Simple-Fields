import { array, oneOf, string } from 'prop-types'
import cx from 'classnames'
import Fieldset from '../Fieldset/Fieldset'
import Checkbox from './Checkbox'
import styles from './CheckboxGroup.module.css'

const CheckboxGroup = ({ fields, legend, type }) => {
  const className = cx([
    styles.root,
    styles[type]
  ])

  return (
    <Fieldset className={className} legend={legend}>
      <ul>
      { fields.map(props => <Checkbox key={props.id} {...props} type={type} />)}
      </ul>
    </Fieldset>
  )
}

CheckboxGroup.propTypes = {
  fields: array.isRequired,
  legend: string,
  type: oneOf([
    'checkbox',
    'switch',
    'pill'
  ])
}

Checkbox.defaultProps = {
  legend: null,
  type: 'checkbox'
}

export default CheckboxGroup
