import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Cuisine from '../Cuisine';

test("should render component", () => {
    render(
        <MemoryRouter >
            <Cuisine match={{params: {cuisine: "american"}}} />
        </MemoryRouter>
    );
    
    const cuisine = screen.getByTestId("cuisine");
    expect(cuisine).toBeInTheDocument();
    const title = screen.getByTestId("title");
    expect(title.textContent).toBe("american Food");
})