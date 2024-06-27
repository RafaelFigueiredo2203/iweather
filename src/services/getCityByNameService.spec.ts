import { mockCityApiResponse } from "../../_tests/mock/api/mockCityApiResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("api: getCityByNameService", () => {
  it('should return city information',async () => {  
    jest.spyOn(api,'get').mockResolvedValue({data : mockCityApiResponse});
    const response = await getCityByNameService("São Paulo")
    expect(response.length).toBeGreaterThan(0)
  })
})