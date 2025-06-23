// type Props = {};

export default function Help() {
  return (
    <div className="max-w-xl mx-auto bg-green-100 border border-green-300 p-6 rounded-2xl shadow-sm">
      <h2 className="font-semibold text-xl">Your Dockerfile is ready!</h2>
      <p className="mb-4">Follow these steps to run your server:</p>
      <ol className="list-decimal list-inside space-y-2 mb-4">
        <li>Open a terminal in the directory containing your Dockerfile</li>
        <li>Run these commands:</li>
      </ol>
      <div className="bg-muted px-4 py-2 rounded-xl space-y-2 mb-4">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {`docker build -t my-minecraft-server .`}
        </pre>
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {`docker run -d -p 25565:25565 --name my-minecraft-server my-minecraft-server`}
        </pre>
      </div>
      <div>
        <h2 className="font-semibold text-xl">How can my friends join?</h2>
        <p className="mb-4">
          By default, the server will run on port 25565. Follow{" "}
          <span className="text-blue-700 font-semibold hover:text-blue-500">
            <a
              href="https://www.hostinger.com/tutorials/how-to-port-forward-a-minecraft-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              this guide
            </a>
          </span>{" "}
          to forward port 25565 on your router and get a public IP address.
        </p>
        {/* <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Step 1</li>
        </ol> */}
      </div>
    </div>
  );
}
