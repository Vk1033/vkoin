import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const VkoinToken = buildModule("VkoinToken", (m) => {
  const vkoin = m.contract("Vkoin");
  return { vkoin };
});

export default VkoinToken;
