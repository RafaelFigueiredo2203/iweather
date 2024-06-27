import clearDay from '@assets/clear_day.svg'
import { Day } from "@components/Day"
import { render, screen } from "@testing-library/react-native"


describe('Component: Day', () => {
  it('should be render Day' , () => {
    render(
    <Day
      data={{
        day:'18/07',
        min:'30ºc',
        max: '34ºc',
        icon: clearDay,
        weather:'Céu Limpo'
      }}
    />)

    expect(screen.getByText('18/07')).toBeTruthy()
  
  })
})