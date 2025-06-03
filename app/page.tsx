import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ServerConfig from "./components/server-config/server-config";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-between min-h-screen p-8 md:p-20 gap-12">
      <main className="flex w-full flex-col gap-[32px] items-center sm:items-start">
        <header className="mx-auto">
          <h1 className="text-yellow-300 text-5xl font-[Minecraft] mx-auto pulse-header">
            CraftUp!
          </h1>
        </header>

        <ServerConfig />
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <span className="w-24">
          <a
            href="https://github.com/ChristianHopf/CraftUp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-md text-white font-semibold items-center justify-center gap-2"
          >
            <GitHubLogoIcon />
            GitHub
          </a>
        </span>
      </footer>
    </div>
  );
}
