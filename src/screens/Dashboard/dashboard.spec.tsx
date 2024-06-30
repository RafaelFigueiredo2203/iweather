
import { api } from "@services/api"

import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockWeatherAPIResponse } from "../../../_tests/mock/api/mockWeatherApiResponse"
import { render, screen, waitFor } from "../../../_tests/utils/customRender"
import { Dashboard } from "./index"

describe("Screen : Dashboard",() => {
  it("should be show a city weather", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse})

    const city = {
      id:'1',name:'rio do sul ', latitude:123, longitude:456
    }

    await saveStorageCity(city)

    render(<Dashboard/>)

    const cityName = await  waitFor(() => screen.findByText(/rio do sul/i))

    expect(cityName).toBeTruthy()
  })
})