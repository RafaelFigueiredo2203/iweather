import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { Routes } from "@routes/index"
import { render, screen, waitFor } from "../../_tests/utils/customRender"

describe('Routes', () => {
  it('should be render search screen when not city selected.' , async () => {
   render(<Routes/>)
   
   const title = await waitFor(() => screen.findByText(/^escolha um local/i))
  
   expect(title).toBeTruthy()
  }) 

  it('should be render dashboard screen when has city selected.' , async () => {
    const city = {
      id:'1',
      name: 'São Paulo',
      longitude:123,
      latitude: 456
    }

    await saveStorageCity(city)
    render(<Routes/>)
    
  
})
})