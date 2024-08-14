import { render ,screen} from "@testing-library/react";
import App from "./App";
import { type } from "@testing-library/user-event/dist/type";

test("Test first react app",()=>{
  render(<App/>);
  const text= screen.getByText(/First react test/i);
  expect(text).toBeInTheDocument();
});

test("Testing Input box",()=>{
  render(<App/>)
  let checkInput=screen.getByRole("textbox");
  let checkPlaveHolder=screen.getByPlaceholderText('Enter Your Name')
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaveHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "Hidayat")
});

describe("UI test group",()=>{
  test("Test case 1 Group", ()=>{
    render(<App/>)
    let checkInput=screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username")
  })
  test("Test case 2 Group", ()=>{
    render(<App/>)
    let checkInput=screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username")
  })
  test("Test case 3 Group", ()=>{
    render(<App/>)
    let checkInput=screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username")
  })
});
describe("Api test group",()=>{
  test("Api Test case 1 Group", ()=>{
    render(<App/>)
    let checkInput=screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username")
  })
  test("Api Test case 2 Group", ()=>{
    render(<App/>)
    let checkInput=screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username")
  })
  test("Api Test case 3 Group", ()=>{
    render(<App/>)
    let checkInput=screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username")
  })
});