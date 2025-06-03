import ServerConfig from "@/app/components/server-config/server-config";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders docker configuration", () => {
    render(<ServerConfig />);

    const heading = screen.getByText("Docker Configuration");
    expect(heading).toBeInTheDocument();

    const imageInput = screen.getByLabelText("Docker Image");
    expect(imageInput).toBeInTheDocument();
  });

  it("renders server configuration", () => {
    render(<ServerConfig />);

    const heading = screen.getByText("Server Configuration");
    expect(heading).toBeInTheDocument();

    const serverSelect = screen.getByLabelText("Server Version");
    expect(serverSelect).toBeInTheDocument();

    const maxPlayersInput = screen.getByLabelText("Max Players");
    expect(maxPlayersInput).toBeInTheDocument();

    const worldNameInput = screen.getByLabelText("World Name");
    expect(worldNameInput).toBeInTheDocument();

    const worldSeedInput = screen.getByLabelText("World Seed");
    expect(worldSeedInput).toBeInTheDocument();

    const gamemodeSelect = screen.getByLabelText("Game Mode");
    expect(gamemodeSelect).toBeInTheDocument();

    const difficultySelect = screen.getByLabelText("Difficulty");
    expect(difficultySelect).toBeInTheDocument();

    const pvpCheckbox = screen.getByLabelText("PvP Enabled");
    expect(pvpCheckbox).toBeInTheDocument();
  });

  it("renders the generate button", () => {
    render(<ServerConfig />);

    const generateButton = screen.getByText("Generate Dockerfile");
    expect(generateButton).toBeInTheDocument();
  });
});
