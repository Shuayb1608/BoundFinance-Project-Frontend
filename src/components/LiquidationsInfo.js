import React from "react";

export default function Liquidation() {
  return (
    <div className="mt-2 max-w-[600px] mx-auto w-full">
      <p className="text-32 font-mont font-bold text-center text-gradient">
        Understanding Liquidations
      </p>
      <p className="mt-4 text-16 font-mont text-white-100 text-justify ">
        Bound Finance's stability relies on overcollateralized loans. With a 2:1 collateral ratio, for every $2 in BCKETH, there's $1 of BCK stablecoin.
      </p>
      <br />
      <p className="text-16 font-mont text-justify">
        Vaults falling below this ratio risk liquidation by our Liquidation bot, where their collateral is shifted to the Tap contract for sale, ensuring BCK stablecoin's value.
      </p>
      <br />
      <p className="text-16 font-mont text-justify">
        BCKETH collateral is wrapped into a safeguard token, BETH. If there's a shortage of collateral for bad debt, we raise the BETH supply, selling it to cover BCK debt.
      </p> 
      <br />
      <p className="text-16 font-mont text-justify">
        While users can swap BETH back for BCKETH at an initial 1:1 rate, increased BETH supply to manage debt might reduce the BCKETH returned. This wrapping ensures we can adjust supply to handle unexpected debt scenarios.
      </p>
      <br />
    </div>
  );
}

