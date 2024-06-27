import { mockWeatherAPIResponse } from "../../_tests/mock/api/mockWeatherApiResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe('api: getWeatherByCityService', () => {
  it('should be return weather api data formatted', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data :mockWeatherAPIResponse})

    const response = await getWeatherByCityService({latitude:123, longitude:456})
    expect(response).toHaveProperty("today")
  })
})