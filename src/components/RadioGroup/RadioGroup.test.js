import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import RadioGroup from './RadioGroup'
import { ContextProvider } from '~src/context'
import mockData from '~mock/form.json'

const FIELD_TYPE_TEXT = 'radio'
const { fields, id } = mockData

describe('RadioGroup', () => {
  describe('when rendered', () => {
    const props = fields.find(({ type }) => type === FIELD_TYPE_TEXT)
    const component = render(
      <ContextProvider formId={id}>
        <RadioGroup {...props} />
      </ContextProvider>
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
