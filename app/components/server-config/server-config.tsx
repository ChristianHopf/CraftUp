"use client";

import { React, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

export default function ServerConfig({}: Props) {
  const [dockerImage, setDockerImage] = useState("");
  const [serverVersion, setServerVersion] = useState("");
  const [containerName, setContainerName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(8);
  const [worldName, setWorldName] = useState("");
  const [worldSeed, setWorldSeed] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [difficulty, setDifficulty] = useState("normal");
  const [pvpEnabled, setPvpEnabled] = useState(false);
  const [eula, setEula] = useState(true);

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
    dockerFileString += "ENV GAMEMODE=" + gameMode + "\n";
    dockerFileString += "ENV DIFFICULTY=" + difficulty + "\n";
    dockerFileString += "ENV PVP=" + pvpEnabled + "\n";

    dockerFileString += "EXPOSE 25565\n";

    // Add more config later

    return dockerFileString;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation

    // Build dockerfile
    const dockerfile = buildDockerfile();

    // Blob
    const blob = new Blob([dockerfile], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Dockerfile";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-4xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ScrollArea className="max-w-2xl w-full h-[50vh] mx-auto p-6 bg-muted rounded-2xl shadow">
          <h1 className="text-xl font-semibold">Docker Configuration</h1>
          <div className="space-y-2">
            <Label htmlFor="dockerImage">Docker Image</Label>
            <Select
              onValueChange={setDockerImage}
              defaultValue={"itzg/minecraft-server:latest"}
              required
            >
              <SelectTrigger id="dockerImage">
                <SelectValue placeholder="Select an image" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"itzg/minecraft-server:latest"}>
                  itzg/minecraft-server:latest
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="containerName">Container Name</Label>
            <Input
              id="containerName"
              type="text"
              value={containerName}
              onChange={(e) => setContainerName(e.target.value)}
              placeholder="e.g., my-minecraft-server"
            />
          </div>
        </ScrollArea>
        <ScrollArea className="max-w-2xl w-full h-[50vh] mx-auto p-6 bg-muted rounded-2xl shadow">
          <h1 className="text-xl font-semibold">Server Configuration</h1>
          <div className="space-y-2">
            <Label htmlFor="serverVersion">Server Version</Label>
            <Select
              onValueChange={setServerVersion}
              defaultValue="1.20.4"
              required
            >
              <SelectTrigger id="serverVersion">
                <SelectValue placeholder="Select version" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.20.4">1.20.4</SelectItem>
                <SelectItem value="1.20.1">1.20.1</SelectItem>
                <SelectItem value="1.19.4">1.19.4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxPlayers">Max Players</Label>
            <Input
              id="maxPlayers"
              type="number"
              min={1}
              max={100}
              value={maxPlayers}
              required
              onChange={(e) => setMaxPlayers(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="worldName">World Name</Label>
            <Input
              id="worldName"
              value={worldName}
              onChange={(e) => setWorldName(e.target.value)}
              placeholder="world"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="worldSeed">World Seed</Label>
            <Input
              id="worldSeed"
              value={worldSeed}
              onChange={(e) => setWorldSeed(e.target.value)}
              placeholder="Leave blank for random"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gameMode">Game Mode</Label>
            <Select onValueChange={setGameMode} defaultValue="survival">
              <SelectTrigger id="gameMode">
                <SelectValue placeholder="Select game mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="survival">Survival</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="hardcore">Hardcore</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select onValueChange={setDifficulty} defaultValue="normal">
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="peaceful">Peaceful</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="pvpEnabled">PvP Enabled</Label>
            <Switch
              id="pvpEnabled"
              checked={pvpEnabled}
              onCheckedChange={setPvpEnabled}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="eula">Accept EULA</Label>
            <Switch id="eula" checked={eula} onCheckedChange={setEula} />
          </div>
        </ScrollArea>
      </div>

      <Button type="submit" className="mx-auto">
        Generate Dockerfile
      </Button>
    </form>
  );
}
