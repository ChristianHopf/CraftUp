import React from "react";

type Props = {};

export default function Help({}: Props) {
  return (
    <div className="max-w-xl mx-auto bg-green-50 border border-green-300 p-6 rounded-2xl shadow-sm">
      <h2 className="font-semibold text-xl">
        Your Dockerfile is ready! Steps to run your server:
      </h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Open a terminal in the directory containing your Dockerfile</li>
        <li>Run these commands:</li>
      </ol>
      <div className="bg-muted px-4 py-2 rounded-xl">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {`docker build -t my-minecraft-server .
docker run -d -p 25565:25565 --name my-minecraft-server my-minecraft-server`}
        </pre>
      </div>
    </div>
  );
}
