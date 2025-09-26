import { demoTransfer, mxConfig } from "../lib/mx";

export default function Wallet() {
  const handleDemo = async () => {
    const res = await demoTransfer();
    alert(res.ok ? "Demo ready (implement real flow next)" : "Error");
  };
  
  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="text-2xl font-bold mb-3">Wallet & Testnet</h1>
      <p className="text-gray-300 mb-4">Network: {mxConfig.network}</p>
      <button className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500" onClick={handleDemo}>
        Run demo placeholder
      </button>
      <p className="text-sm text-gray-400 mt-3">
        Coming soon: xPortal connect, balance, and testnet actions.
      </p>
    </div>
  );
}