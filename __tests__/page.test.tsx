// import Help from "@/app/components/help";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("CraftUp");
    expect(heading).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<Home />);

    // Render footer
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ChristianHopf/CraftUp');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toBeInTheDocument();
  });
});
