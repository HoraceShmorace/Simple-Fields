import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import TextArea from './TextArea'
import { ContextProvider } from '~src/context'
import mockData from '~mock/form.json'

const FIELD_TYPE_TEXT = 'textarea'
const { fields, id } = mockData

describe('TextArea', () => {
  describe('when rendered', () => {
    const props = fields.find(({ type }) => type === FIELD_TYPE_TEXT)
    const component = render(
      <ContextProvider formId={id}>
        <TextArea {...props} />
      </ContextProvider>
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
