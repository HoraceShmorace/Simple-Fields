import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Context, ContextProvider } from './context'

describe('Context', () => {
  describe('createContext', () => {
    describe('when context is created', () => {
      it('should match snapshot', () => {
        expect(toJson(Context)).toMatchSnapshot()
      })
    })
  })

  describe('ContextProvider', () => {
    describe('when rendered', () => {
      const component = render(
        <ContextProvider formId={1}><div /></ContextProvider>
      )

      it('should match snapshot', () => {
        expect(toJson(component)).toMatchSnapshot()
      })
    })
  })
})
