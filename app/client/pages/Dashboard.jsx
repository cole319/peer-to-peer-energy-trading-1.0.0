import { useState, useEffect } from "react";
import Link from "next/link";

import { EnergyTrading } from "../../contract/index";

export default function Dashboard() {
  const [data, setData] = useState("");
  const [etContract, setEtContract] = useState();

  return (
    <div className="px-20 py-20">
      <h1 className="text-center font-semibold text-4xl">
        Welcome to P2P Electricity Transfer Network
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          href="/MyPortal"
          style={{
            color: "#00ffef",
            marginTop: "70px",
            fontSize: "20px",
            fontWeight: "Bold",
            textDecoration: "underline",
          }}
        >
          Go to MyPortal{" "}
        </Link>
      </div>
      <h2 className="portal-style">Available Electricity Units for Sale</h2>

      <table className="border-collapse border-2 border-solid border-neutral-900 w-full text-neutral-900 rounded-md mt-[20px] bg-neutral-200">
        <tbody>
          <tr>
            <th>Seller Address</th>
            <th>Units Available</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>

          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.prosumer}</td>
                <td>{item.units}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onSubmit={handleSubmit(item.listingId, item.units)}
                    style={{
                      backgroundColor: "#9cecdb",
                      width: "12vh",
                      height: "30px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    buy
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
