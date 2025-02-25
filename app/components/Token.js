import { ethers } from "ethers"

function Token({ toggleTrade, token }) {
  return (
    <button onClick={() => toggleTrade(token)} className="token">
      <div className="token__details">
        <img src={token.image} alt="token image" width={100} height={100} />
        <p   style={{
    color: "#333", // dark gray text
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    margin: "0.5rem 0",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
  }}>Created by {token.creator.slice(0, 6) + '...' + token.creator.slice(38, 42)}</p>
        <p   style={{
    color: "#333", // dark gray text
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    margin: "0.5rem 0",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
  }}
        >Market Cap: {ethers.formatUnits(token.raised, 18)} eth</p>
        <p   style={{
    color: "#333", // dark gray text
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    margin: "0.5rem 0",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
  }}>{token.name}</p>
      </div>
    </button>
  );
}

export default Token;