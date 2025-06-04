"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Help from "../help";

import "@/app/globals.css";

// type Props = {};

export default function ServerConfig() {
  const [dockerImage, setDockerImage] = useState("itzg/minecraft:latest");
  const [serverVersion, setServerVersion] = useState("1.20.4");
  // const [containerName, setContainerName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(8);
  const [worldName, setWorldName] = useState("");
  const [worldSeed, setWorldSeed] = useState("");
  const [gameMode, setGameMode] = useState("Survival");
  const [difficulty, setDifficulty] = useState("Normal");
  const [pvpEnabled, setPvpEnabled] = useState(false);
  // const [eula, setEula] = useState(true);

  const [showHelp, setShowHelp] = useState(false);

  const buildDockerfile = () => {
    let dockerFileString = "";
    dockerFileString += "FROM " + dockerImage + "\n";
    dockerFileString += "ENV VERSION=" + serverVersion + "\n";
    dockerFileString += "ENV MAX_PLAYERS=" + maxPlayers + "\n";
    if (worldName != "") {
      dockerFileString += "ENV WORLD_NAME=" + worldName + "\n";
    }
    if (worldSeed != "") {
      dockerFileString += "ENV WORLD_SEED=" + worldSeed + "\n";
    }
    dockerFileString += "ENV GAMEMODE=" + gameMode.toLocaleLowerCase() + "\n";
    dockerFileString +=
      "ENV DIFFICULTY=" + difficulty.toLocaleLowerCase() + "\n";
    dockerFileString += "ENV PVP=" + pvpEnabled + "\n";
    // Required to launch the server
    dockerFileString += "ENV EULA=true\n";

    dockerFileString += "EXPOSE 25565\n";

    // Add more config later

    console.log(dockerFileString);

    return dockerFileString;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation

    // Build dockerfile
    const dockerfile = buildDockerfile();

    // Blob
    const blob = new Blob([dockerfile], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Dockerfile";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setShowHelp(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-4xl mx-auto space-y-6 fade-in"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ScrollArea className="max-w-2xl w-full h-[50vh] mx-auto px-6 py-4 bg-menu rounded-2xl shadow-lg space-y-6">
          <div className="space-y-4 mt-2">
            <h1 className="text-2xl md:text-3xl text-menu-text font-[Minecraft]">
              Docker Configuration
            </h1>
            <div className="space-y-2">
              <label
                htmlFor="image"
                className="font-[Minecraft] text-menu-text"
              >
                Docker Image
              </label>
              <select
                name="image"
                id="image"
                value={dockerImage}
                onChange={(e) => setDockerImage(e.target.value)}
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              >
                <option value={"itzg/minecraft:latest"}>
                  itzg/minecraft:latest
                </option>
              </select>
            </div>
          </div>
        </ScrollArea>
        <ScrollArea className="max-w-2xl w-full h-[50vh] mx-auto px-6 py-4 bg-menu rounded-2xl shadow-lg space-y-6">
          <div className="space-y-4 mt-2">
            <h1 className="text-2xl md:text-3xl text-[#3F3F3F] font-[Minecraft]">
              Server Configuration
            </h1>
            <div className="space-y-2">
              <label
                htmlFor="serverVersion"
                className="font-[Minecraft] text-menu-text"
              >
                Server Version
              </label>
              <select
                name="serverVersion"
                id="serverVersion"
                value={serverVersion}
                onChange={(e) => setServerVersion(e.target.value)}
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              >
                <option value="1.20.4">1.20.4</option>
                <option value="1.20.1">1.20.1</option>
                <option value="1.19.4">1.19.4</option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="maxPlayers"
                className="font-[Minecraft] text-menu-text"
              >
                Max Players
              </label>
              <input
                type="number"
                id="maxPlayers"
                min={1}
                max={100}
                value={maxPlayers}
                required
                onChange={(e) => setMaxPlayers(Number(e.target.value))}
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="worldName"
                className="font-[Minecraft] text-menu-text"
              >
                World Name
              </label>
              <input
                type="text"
                id="worldName"
                value={worldName}
                onChange={(e) => setWorldName(e.target.value)}
                placeholder="world"
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="worldSeed"
                className="font-[Minecraft] text-menu-text"
              >
                World Seed
              </label>
              <input
                type="text"
                id="worldSeed"
                value={worldSeed}
                onChange={(e) => setWorldSeed(e.target.value)}
                placeholder="Leave blank for random"
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="gameMode"
                className="font-[Minecraft] text-menu-text"
              >
                Game Mode
              </label>
              <select
                name="gameMode"
                id="gameMode"
                value={gameMode}
                onChange={(e) => setGameMode(e.target.value)}
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              >
                <option value="Survival">Survival</option>
                <option value="Creative">Creative</option>
                <option value="Adventure">Adventure</option>
                <option value="Spectator">Spectator</option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="difficulty"
                className="font-[Minecraft] text-menu-text"
              >
                Difficulty
              </label>
              <select
                name="difficulty"
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="block w-full border-1 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none mt-1"
              >
                <option value="Peaceful">Peaceful</option>
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="pvpEnabled"
                className="font-[Minecraft] text-menu-text"
              >
                Enable PvP
              </label>
              <input
                type="checkbox"
                name="pvpEnabled"
                id="pvpEnabled"
                checked={pvpEnabled}
                onChange={(e) => {
                  setPvpEnabled(e.target.checked);
                }}
              />
            </div>
          </div>
        </ScrollArea>
      </div>

      <Button type="submit" variant="default" className="mx-auto">
        Generate Dockerfile
      </Button>
      {showHelp && <Help />}
    </form>
  );
}
