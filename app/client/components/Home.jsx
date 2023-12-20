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

  return (
    <div>
      <button className="py-2 px-3 bg-white text-black" onClick={connectWallet}>
        {isConnected == true ? <div>Connected</div> : <div>Connect Wallet</div>}
      </button>
    </div>
  );
}
