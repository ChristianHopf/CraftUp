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
import { Switch } from "@radix-ui/react-switch";
import { ScrollArea } from "@radix-ui/react-scroll-area";

type Props = {};

export default function ServerConfig({}: Props) {
  const [dockerImage, setDockerImage] = useState("");
  const [serverVersion, setServerVersion] = useState("");
  const [containerName, setContainerName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(10);
  const [worldSeed, setWorldSeed] = useState("");
  const [pvpEnabled, setPvpEnabled] = useState(true);
  const [gameMode, setGameMode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const config = {
      dockerImage,
      serverVersion,
      containerName,
      maxPlayers,
      worldSeed,
      pvpEnabled,
      gameMode,
    };

    console.log(config);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-4xl mx-auto space-y-6 p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ScrollArea className="max-w-2xl w-full mx-auto space-y-6 p-6 bg-muted rounded-2xl shadow">
          <h1 className="text-xl font-semibold">Docker Configuration</h1>
          <div className="space-y-2">
            <Label htmlFor="dockerImage">Docker Image</Label>
            <Select onValueChange={setDockerImage}>
              <SelectTrigger id="dockerImage">
                <SelectValue placeholder="Select an image" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="itzg">itzg/minecraft-server:latest</SelectItem>
                <SelectItem value="paper">Paper</SelectItem>
                <SelectItem value="spigot">Spigot</SelectItem>
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
        <ScrollArea className="max-w-2xl w-full mx-auto space-y-6 p-6 bg-muted rounded-2xl shadow">
          <h1 className="text-xl font-semibold">Server Configuration</h1>
          <div className="space-y-2">
            <Label htmlFor="serverVersion">Server Version</Label>
            <Select onValueChange={setServerVersion}>
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
              onChange={(e) => setMaxPlayers(Number(e.target.value))}
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
          <div className="flex items-center justify-between">
            <Label htmlFor="pvpEnabled">PvP Enabled</Label>
            <Switch
              id="pvpEnabled"
              checked={pvpEnabled}
              onCheckedChange={setPvpEnabled}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gameMode">Game Mode</Label>
            <Select onValueChange={setGameMode}>
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
        </ScrollArea>
      </div>

      <Button type="submit" className="mx-auto">
        Generate Dockerfile
      </Button>
    </form>
  );
}
