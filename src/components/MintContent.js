import React from "react";

export default function MintContent() {
  return (
    <div className="mt-2 max-w-[600px] mx-auto w-full">
      <p className="text-32 font-mont font-bold text-center text-gradient">
        Step 2. | Mint BCK
      </p>

      <ol className="list-decimal pl-5 mt-4 text-16 font-mont text-white-100 text-justify space-y-4">
        <li>Mint BCKETH from the BCKETH tab; it's the collateral for BCK stablecoins.</li>

        <li>Lock BCKETH on the CDP page. It gets wrapped to BETH for the liquidation mechanics purposes.</li>

        <li>Mint BCK. Ensure the minted amount stays below the max debt relative to your collateral to avoid liquidation risks.</li>

        <li>Reduce BCK using "Pay Back BCK" or retrieve some BCKETH, but mind the minimum collateralization ratio.</li>

        <li>Use the Safe tab to keep track of liquidation risks.</li>

        <li>No post-loan interest. Periodically earn ETH from collateral. Withdraw through the Collateral Interest tab.</li>

        <li>With a fully overcollateralized BCK position, stake in the BCK savings account for yield. Use BCK like any other stablecoin.</li>
      </ol>

    </div>
  );
}

