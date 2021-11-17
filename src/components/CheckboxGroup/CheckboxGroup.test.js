import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CheckboxGroup from './CheckboxGroup'
import mockData from '~mock/form.json'

const FIELD_TYPE_TEXT = 'checkbox'

describe('CheckboxGroup', () => {
  describe('when rendered', () => {
    const props = mockData.fields.find(({ type }) => type === FIELD_TYPE_TEXT)
    const component = shallow(
      <CheckboxGroup {...props} />
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
