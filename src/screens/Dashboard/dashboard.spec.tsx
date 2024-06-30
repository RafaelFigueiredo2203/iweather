
import { api } from "@services/api"

import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

import { mockCityApiResponse } from "../../../_tests/mock/api/mockCityApiResponse"
import { mockWeatherAPIResponse } from "../../../_tests/mock/api/mockWeatherApiResponse"
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "../../../_tests/utils/customRender"
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

  it("should be show another selected  weather city", async () => {


    const city = {
      id:'1',name:'rio do sul ', latitude:123, longitude:456
    }

    await saveStorageCity(city)

    jest.spyOn(api, 'get').mockResolvedValueOnce({data: mockWeatherAPIResponse})
    .mockResolvedValueOnce({data: mockCityApiResponse})
    .mockResolvedValueOnce({data: mockWeatherAPIResponse})

    render(<Dashboard/>)

    await waitForElementToBeRemoved(() =>  screen.queryByTestId('loading'))

    const cityName = 'São Paulo' 
    await  waitFor(() => act(() => {
      const search = screen.getByTestId('search-input')
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, {exact:false}))
    }))

    expect(screen.getByText(cityName, {exact: false})).toBeTruthy()
  })
})