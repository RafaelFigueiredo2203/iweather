import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "./index"

describe("Component: SelectList", () => {
  it('should be return city details selected',() => {

    const data = [
      {id:'1', name:'Campinas', latitude:123, longitude:456},
      {id:'2', name:'Ourinhos', latitude:789, longitude:101112}
    ]

    const onPress = jest.fn();

    render(<SelectList 
    data={data}
    onChange={() => {}}
    onPress={onPress}
    />);

    const selectedCity = screen.getByText(/Campinas/i)
    fireEvent.press(selectedCity)
    expect(onPress).toHaveBeenCalledWith(  
      expect.objectContaining({
      name : 'Campinas',
     }),);

  })

  it('not should be show options when data props is empty',() => {
    render(<SelectList 
      data={[]}
      onChange={() => {}}
      onPress={() => {}}
      />)

      const options = screen.getByTestId('options')
      expect(options.children).toHaveLength(0)
  })
})