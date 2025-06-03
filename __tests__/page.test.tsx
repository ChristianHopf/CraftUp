// import Help from "@/app/components/help";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("CraftUp");
    expect(heading).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<Home />);

    // Render footer
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/ChristianHopf/CraftUp"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(githubLink).toBeInTheDocument();
  });

  it("generates a valid dockerfile", async () => {
    render(<Home />);

    // Select values for all Docker configuration inputs
    const imageInput = screen.getByLabelText("Docker Image");
    await act(async () => {
      fireEvent.change(imageInput, {
        target: { value: "itzg/minecraft:latest" },
      });
    });
    expect(imageInput).toHaveValue("itzg/minecraft:latest");

    // Select values for all server configuration inputs
    const serverVersionSelect = screen.getByLabelText("Server Version");
    await act(async () => {
      fireEvent.change(serverVersionSelect, {
        target: { value: "1.20.1" },
      });
    });
    expect(serverVersionSelect).toHaveValue("1.20.1");

    const maxPlayersInput = screen.getByLabelText("Max Players");
    await act(async () => {
      fireEvent.change(maxPlayersInput, {
        target: { value: 4 },
      });
    });
    expect(maxPlayersInput).toHaveValue(4);

    const worldNameInput = screen.getByLabelText("World Name");
    await act(async () => {
      fireEvent.change(worldNameInput, {
        target: { value: "testWorldName" },
      });
    });
    expect(worldNameInput).toHaveValue("testWorldName");

    const worldSeedInput = screen.getByLabelText("World Seed");
    await act(async () => {
      fireEvent.change(worldSeedInput, {
        target: { value: "testWorldSeed" },
      });
    });
    expect(worldSeedInput).toHaveValue("testWorldSeed");

    const gamemodeSelect = screen.getByLabelText("Game Mode");
    await act(async () => {
      fireEvent.change(gamemodeSelect, {
        target: { value: "Creative" },
      });
    });
    expect(gamemodeSelect).toHaveValue("Creative");

    const difficultySelect = screen.getByLabelText("Difficulty");
    await act(async () => {
      fireEvent.change(difficultySelect, {
        target: { value: "Peaceful" },
      });
    });
    expect(difficultySelect).toHaveValue("Peaceful");

    const pvpCheckbox = screen.getByLabelText("PvP Enabled");
    await act(async () => {
      fireEvent.change(pvpCheckbox, {
        target: { checked: true },
      });
    });
    expect(pvpCheckbox).toBeChecked();
  });
});
