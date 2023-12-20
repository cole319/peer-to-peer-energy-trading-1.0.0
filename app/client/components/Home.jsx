import React, { useState, useEffect } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getConnectedAccounts();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  const getConnectedAccounts = async () => {
    if (typeof window.ethereum != "undefined") {
      try {
        const currentAccounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (currentAccounts.length > 0) {
          setWalletAddress(currentAccounts[0]);
          setIsConnected(true);
        } else {
          console.log("connect to metamask");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("please install metamask");
    }
  };

  /*

There will be five functions. 
1. Add Listing (for producers) :
  params: i.units
          ii.price/units
          iii.listingPeriod

2. Buy Units (for consumers):
  params: i.listingId (key to the listing)
          ii.units

3. Check Listing (for anyone, esp consumers):
  params: i.listingId
                            
4. Get All ListingIds :
  params: NONE
         
5. Get Listing Details :
  params: i.listingId
         

*/

  return (
    <div>
      <button className="py-2 px-3 bg-white text-black" onClick={connectWallet}>
        {isConnected == true ? <div>Connected</div> : <div>Connect Wallet</div>}
      </button>
    </div>
  );
}
