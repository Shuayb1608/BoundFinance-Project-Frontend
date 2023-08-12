import React from "react";

export default function BCKETHcreation() {
  return (
    <div className="mt-2 max-w-[600px] mx-auto w-full">
      <p className="text-32 font-mont font-bold text-center text-gradient">
        Step 1. | Minting BCKETH
      </p>
      <p className="mt-4 text-16 font-mont text-white-100 text-justify">
        Bound Finance introduces BCKETH, a 1:1 redeemable version of ETH similar to WETH. Used as collateral for loans, it leverages ETH rewards through validators and LST tokens.
      </p>
      <br />
      <p className="text-16 font-mont text-justify">
        Deposit ETH and receive equal BCKETH. The BCKETH contract keeps 5% ETH and sends 95% to a reserve. Users can direct this ETH to LidoVault for returns via Lido's StETH or to our validators. Direct via the treasury DAO tab.
      </p>
      <br />
      <p className="text-16 font-mont text-justify">
        Convert BCKETH to ETH by initiating a withdrawal. Your BCKETH is burnt for an IOU. If BCKETH and Reserve funds fall short, use the 'sTETH to ETH' function. ETH withdrawals finalize via the 'Execute Withdrawal' button, typically taking 1-3 days.
      </p>
      <br />
      <p className="text-16 font-mont text-justify">
        Our LidoWithdrawal contract maintains BCKETH's 1:1 redemption ratio. For faster ETH, exchange BCKETH on a DEX, but anticipate potential swap fees.
      </p>
      <br />
    </div>
  );
}
