import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button component", () => {
  it("shows 'S'inscrire' when user has access and is not subscribed", () => {
    render(<Button hasAccess isSubscribed={false} onToggle={jest.fn()} />);

    expect(screen.getByRole("button")).toHaveTextContent("S'inscrire");
    expect(screen.getByRole("button")).toBeEnabled();
  });

  it("shows 'Se désinscrire' when already subscribed", () => {
    render(<Button hasAccess isSubscribed onToggle={jest.fn()} />);

    expect(screen.getByRole("button")).toHaveTextContent("Se désinscrire");
  });

  it("calls onToggle when clicked and access granted", () => {
    const onToggle = jest.fn();
    render(<Button hasAccess isSubscribed={false} onToggle={onToggle} />);

    fireEvent.click(screen.getByRole("button"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
