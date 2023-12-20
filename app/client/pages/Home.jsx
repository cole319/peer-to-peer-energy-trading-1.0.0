import React, { useState, useEffect } from "react";
import Link from "next/link";

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

  function alert() {
    alert("Please Install Metamssk");
  }

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
      <nav
        className="sm:flex-row sm:justify-between sm:py-4 
            py-10 px-40 flex flex-col space-y-4 sm:space-y-0 
            items-center"
      >
        <div>
          <h1 className="font-semibold text-3xl text-neutral-200">
            P2P Energy Trade
          </h1>
        </div>
        <button
          className="py-2 px-3 bg-neutral-200 text-neutral-800 
            rounded-md font-semibold border-2 border-neutral-200
            hover:text-neutral-200 hover:bg-transparent w-fit"
          onClick={connectWallet}
        >
          {isConnected == true ? (
            <div>
              {walletAddress.slice(0, 6) +
                "..." +
                walletAddress.slice(
                  walletAddress.length - 6,
                  walletAddress.length
                )}
            </div>
          ) : (
            <div>Connect Wallet</div>
          )}
        </button>
      </nav>
      <main>
        <div className="text-center p-20 pb-0">
          {isConnected && (
            <h1 className="text-4xl text-neutral-200 font-semibold">
              List or Buy Energy
            </h1>
          )}
          <div>
            {!isConnected && (
              <div className="delay-100">
                <h1 className="text-4xl text-neutral-300 font-semibold pb-10">
                  Welcome to Peer-to-Peer Energy Distribution Ecosystem
                </h1>
                <h1 className="text-2xl text-neutral-100 font-semibold">
                  Please connect Your Wallet
                </h1>
              </div>
            )}
          </div>
        </div>

        <div className="py-20 px-80 text-center text-xl text-blue-400 flex flex-col space-y-8 ">
          <Link href={isConnected == true ? "/AddListing" : "/default"}>
            <h1 className="hover:underline">
              Click here to Add Units of Electricity for Trading
            </h1>
          </Link>
          <Link href="">
            <h1 className="hover:underline">
              Click here to Buy Electricity Units
            </h1>
          </Link>
          <Link href="">
            <h1 className="hover:underline">
              Click here to Check Listing of Electricity Units corresponding to
              Listing-ID
            </h1>
          </Link>
          <Link href="">
            <h1 className="hover:underline">
              Click here to access Complete List
            </h1>
          </Link>
          <Link href="">
            <h1 className="hover:underline">
              Click here to access Listing Details corresponding to Listing-ID
            </h1>
          </Link>
        </div>
      </main>
    </div>
  );
}
