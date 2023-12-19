import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ethers } from "ethers";

import Dashboard from "./Dashboard";

export default function Home() {
  const [accountAddress, setAccountAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState();

  useEffect(() => {
    getCurrentWalletConnected();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccountAddress(accounts[0]);
        setIsConnected(true);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setAccountAddress(accounts[0]);
          setIsConnected(true);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  return (
    <>
      <div>
        {!isConnected && (
          <div>
            <div className="text-center items-center w-full position: absolute sm:top-1/4 top-10 px-10">
              <h1 className="font-semibold text-2xl sm:text-3xl text-neutral-200">
                Peer to Peer
              </h1>
              <h1 className="font-semibold text-4xl sm:text-6xl text-neutral-200">
                Energy Trading
              </h1>
              <div className="py-10">
                <button
                  className="w-fit py-2 px-3 rounded-md font-semibold text-xl bg-neutral-200 border-2 border-neutral-200 text-neutral-800 hover:bg-transparent hover:text-neutral-200"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            <footer></footer>
          </div>
        )}
      </div>
      {isConnected && <Dashboard />}
    </>
  );

  //   return (
  //     <div>
  //       <div>
  //         {!isConnected && (
  //           <>
  //             <button onClick={connectWallet}>Connect</button>
  //             <h1>Damn dnigga let me breath</h1>
  //           </>
  //         )}
  //       </div>
  //       {isConnected && (
  //         <div>
  //           <h1>Hello</h1>
  //           <p>There</p>
  //         </div>
  //       )}
  //     </div>
  //   );
}
