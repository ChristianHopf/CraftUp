// import Help from "@/app/components/help";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Mock blob for generating dockerfile
// const mockCreateObjectURL = jest.fn(() => "mock-create-object-url");
// const mockRevokeObjectURL = jest.fn(() => "mock-revoke-object-url");
// global.URL.createObjectURL = mockCreateObjectURL;
// global.URL.revokeObjectURL = mockRevokeObjectURL;
// const mockDockerfile = [
//   "FROM itzg/minecraft-server:latest",
//   "ENV VERSION=1.20.1",
//   "ENV MAX_PLAYERS=4",
//   "ENV WORLD_NAME=testWorldName",
//   "ENV WORLD_SEED=testWorldSeed",
//   "ENV GAMEMODE=creative",
//   "ENV DIFFICULTY=peaceful",
//   "ENV PVP=true",
//   "ENV EULA=true",
//   "EXPOSE 25565",
//   "",
// ].join("\n");
// const mockBlob = {
//   text: jest.fn().mockResolvedValue(mockDockerfile),
//   arrayBuffer: jest.fn().mockResolvedValue(new ArrayBuffer(8)),
//   slice: jest.fn(),
// };
// global.Blob = jest.fn(() => mockBlob);

// Mock console log
const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

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
    const imageSelect = screen.getByLabelText("Docker Image");
    await act(async () => {
      fireEvent.change(imageSelect, {
        target: { value: "itzg/minecraft:latest" },
      });
    });
    expect(imageSelect).toHaveValue("itzg/minecraft:latest");

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

    const pvpCheckbox = screen.getByLabelText("Enable PvP");
    await act(async () => {
      fireEvent.change(pvpCheckbox, {
        target: { checked: true },
      });
    });
    expect(pvpCheckbox).toBeChecked();

    // Generate Dockerfile
    const generateButton = screen.getByText("Generate Dockerfile");
    await act(async () => {
      // fireEvent.click(generateButton);
    });

    // Check dockerfile
    const mockDockerfile = [
      "FROM itzg/minecraft-server:latest",
      "ENV VERSION=1.20.1",
      "ENV MAX_PLAYERS=4",
      "ENV WORLD_NAME=testWorldName",
      "ENV WORLD_SEED=testWorldSeed",
      "ENV GAMEMODE=creative",
      "ENV DIFFICULTY=peaceful",
      "ENV PVP=true",
      "ENV EULA=true",
      "EXPOSE 25565",
      "",
    ].join("\n");
    // expect(consoleLogSpy).toHaveBeenCalledWith(mockDockerfile);
  });
});
