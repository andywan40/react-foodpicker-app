import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Dish from '../Dish';

afterEach(()=> {
    cleanup();
})

test("should render component", () => {
    render(
        <MemoryRouter initialEntries={["/american/grits"]}>
            <Dish match={{params: {cuisine: "american", dish: "grits"}}} location={{dishProps: { dishInfo: { canGetRecipe: true, title: "gritsss", url: "testurl"}}}}/>
        </MemoryRouter>
    );
    // const dish = screen.getByTestId("dish");
    // expect(dish).toBeInTheDocument();
    const title = screen.getByTestId("title");
    expect(title.textContent).toBe("gritsss");
    //const img = screen.getByTestId("img");
    //expect(img.getAttribute("src")).toBe("testurl");
})


test("matches snapshot", ()=> {
    const tree = renderer.create(
        <MemoryRouter initialEntries={["/american/grits"]}>
            <Dish match={{params: {cuisine: "american", dish: "grits"}}} location={{dishProps: { dishInfo: { canGetRecipe: true, title: "gritsss", url: "testurl"}}}}/>
        </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})