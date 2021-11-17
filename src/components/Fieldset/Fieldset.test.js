import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Fieldset from './Fieldset'
import mockData from '~mock/form.json'

const FIELD_TYPES = ['checkbox', 'email', 'name', 'number', 'phone', 'radio', 'section', 'select', 'text', 'textarea']

describe('Fieldset', () => {
  FIELD_TYPES.forEach(type => {
    describe(`when field type is "${type}"`, () => {
      const props = mockData.fields.find(field => field.type === type)
      const component = shallow(
        <Fieldset {...props} />
      )

      it('should match snapshot', () => {
        expect(toJson(component)).toMatchSnapshot()
      })
    })
  })
})
