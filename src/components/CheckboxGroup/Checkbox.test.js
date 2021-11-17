import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  describe('when rendered as CHECKED', () => {
    const props = {
      id: 'on',
      isCheckedByDefault: true,
      label: 'This is checked',
      onClick: jest.fn(),
      value: 'checkbox test'
    }

    const component = shallow(
      <Checkbox {...props} />
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })

  describe('when rendered as UNCHECKED', () => {
    const props = {
      id: 'off',
      isCheckedByDefault: false,
      label: 'This is not checked',
      onClick: jest.fn(),
      value: 'checkbox test'
    }

    const component = shallow(
      <Checkbox {...props} />
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
