
import { api } from "@services/api"
import { mockCityApiResponse } from "../../../_tests/mock/api/mockCityApiResponse"
import { fireEvent, render, screen, waitFor } from "../../../_tests/utils/customRender"
import { Search } from "./index"

describe("Screen : Search",() => {
  it("should be show city option", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data: mockCityApiResponse})
    render(<Search/>)

    const searchInput = screen.getByTestId('search-input')

    fireEvent.changeText(searchInput, 'São Paulo' )

    const option = await  waitFor(() => screen.findByText(/são paulo/i))
    expect(option).toBeTruthy()
  })
})