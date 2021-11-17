import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Text from './Text'
import { ContextProvider } from '~src/context'
import mockData from '~mock/form.json'

const FIELD_TYPE_TEXT = 'text'
const { fields, id } = mockData

describe('Text', () => {
  describe('when rendered', () => {
    const props = fields.find(({ type }) => type === FIELD_TYPE_TEXT)
    const component = render(
      <ContextProvider formId={id}>
        <Text {...props} />
      </ContextProvider>
    )

    it('should match snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
