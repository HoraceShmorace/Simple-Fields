import Fieldset from '../Fieldset/Fieldset'
import Checkbox from './Checkbox'
import styles from './CheckboxGroup.module.css'

const CheckboxGroup = ({ fields, label }) => (
  <Fieldset className={styles.root} label={label}>
    <ul>
    { fields.map(props => <Checkbox key={props.id} {...props} />)}
    </ul>
  </Fieldset>
)

export default CheckboxGroup
