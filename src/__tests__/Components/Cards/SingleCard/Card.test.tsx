import {render, screen} from "@testing-library/react";
import { act } from "react";
import Card from "../../../../Components/Cards/SingleCard/Card";

describe("Card Component", () => {
    test("Renders Card with title and children", () => {
      act(() => {
        render(<Card title="Test Card">Test Content</Card>);
      })

        const title = screen.getByText("Test Card");
        const children = screen.getByText("Test Content");

        expect(title).toBeInTheDocument();
        expect(children).toBeInTheDocument();
    });

    test('Renders children correctly', () => {
        render(
          <Card title="Test Title">
            <span>Test Content</span>
          </Card>
        );
    
        const title = screen.getByText('Test Title');
        const children = screen.getByText('Test Content');
    
        expect(title).toBeInTheDocument();
        expect(children).toBeInTheDocument();
        expect(children.tagName).toBe('SPAN');
      });
});