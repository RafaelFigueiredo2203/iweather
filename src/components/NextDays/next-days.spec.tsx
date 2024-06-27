import clearDay from '@assets/clear_day.svg'
import { NextDays } from "@components/NextDays"
import { render, screen } from "@testing-library/react-native"

describe('Component:NextDays', () => {
  it('should be render next days',() => {
    render(<NextDays
    data={[
      { day:'18/07',
        min:'20ºc',
        max: '34ºc',
        icon: clearDay,
        weather:'Céu Limpo'},
      { day:'19/07',
          min:'31ºc',
          max: '34ºc',
          icon: clearDay,
          weather:'Nublado'},
        { day:'12/07',
           min:'19ºc',
          max: '34ºc',
          icon: clearDay,
          weather:'Céu Limpo'},
        { day:'20/07',
          min:'15ºc',
          max: '34ºc',
          icon: clearDay,
          weather:'Chuva'},
    ]}
    />)

    expect(screen.getByText('19/07')).toBeTruthy()
  })
})