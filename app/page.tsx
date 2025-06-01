// import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ServerConfig from "./components/server-config/server-config";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-between min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-5xl mx-auto">CraftUp</h1>
        <ServerConfig />
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <span className="w-24">
          <a
            href="https://github.com/ChristianHopf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GitHubLogoIcon className="text-3xl" />
            GitHub
          </a>
        </span>
      </footer>
    </div>
  );
}
