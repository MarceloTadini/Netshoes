import "@testing-library/jest-dom"
import { render } from "../../utils/test-utils"
import {describe, test, expect } from "vitest"

import Header from "."


describe("Header component", () => {
    test("Should render header correctly", () => {
        const {getByText} = render(<Header></Header>)
        expect(getByText("NETSHOES")).toBeInTheDocument()
    })
})