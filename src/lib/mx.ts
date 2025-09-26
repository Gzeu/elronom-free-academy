// Placeholder for MultiversX integration points
// For UI wallet connect flows, consider @multiversx/sdk-dapp Hooks later
export type Network = "mainnet" | "testnet" | "devnet";

export const mxConfig = {
  network: (import.meta.env.VITE_MX_NETWORK as Network) || "testnet",
};

export const demoTransfer = async () => {
  // Implement sample testnet tx flow later
  return { ok: true };
};