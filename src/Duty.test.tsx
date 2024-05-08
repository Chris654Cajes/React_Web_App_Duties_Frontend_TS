import { render, screen, cleanup } from "@testing-library/react";
import DutyList from "./DutyList";
import Create from "./Create";

afterEach(() => {
    cleanup();
});

test('should render DutyList component', () => {
    const duties = [{ id: "1", name: "programming" }, { id: "2", name: "laundry" }];

    const handelDelete = jest.fn();
    const getDuty = jest.fn();

    render(<DutyList duties={duties} title="All Duties!" handelDelete={handelDelete} getDuty={getDuty}  />)
    
    const dutiesElement = screen.getByTestId('duties-1');
    expect(dutiesElement).toBeInTheDocument();
    expect(dutiesElement).toHaveTextContent('All Duties!');
});

test('should render Create component', () => {
    const duty = { id: "1", name: "programming" };

    const addDuty = jest.fn();

    render(<Create duty={duty} addDuty={addDuty} />)
    
    const dutiesElement = screen.getByTestId('create-duties-1');
    expect(dutiesElement).toBeInTheDocument();
    expect(dutiesElement).toHaveTextContent('Create / Edit Duty');
    
});