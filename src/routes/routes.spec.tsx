import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { Routes } from "@routes/index"
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "../../_tests/mock/api/mockWeatherApiResponse"
import { act, render, screen, waitFor } from "../../_tests/utils/customRender"

describe('Routes', () => {
  it('should be render search screen when not city selected.' , async () => {
   render(<Routes/>)
   
   const title = await waitFor(() => screen.findByText(/^escolha um local/i))
  
   expect(title).toBeTruthy()
  }) 

  it('should be render dashboard screen when has city selected.' , async () => {
    jest.spyOn(api, "get").mockResolvedValue({data: mockWeatherAPIResponse})
    const city = {
      id:'1',
      name: 'São Paulo',
      longitude:123,
      latitude: 456
    }

    await saveStorageCity(city)
    

    await act(() => waitFor(() => render(<Routes/>)))
    
    const title = screen.getByText(city.name)
    expect(title).toBeTruthy()

})
})