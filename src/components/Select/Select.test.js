import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Select from './Select'
import { ContextProvider } from '~src/context'
import mockData from '~mock/form.json'

const FIELD_TYPE_TEXT = 'select'
const { fields, id } = mockData

describe('Select', () => {
  describe('when rendered', () => {
    const props = fields.find(({ type }) => type === FIELD_TYPE_TEXT)
    const component = render(
      <ContextProvider formId={id}>
        <Select {...props} />
      </ContextProvider>
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
