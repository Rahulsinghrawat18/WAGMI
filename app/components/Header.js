import { useEffect } from "react";
import { ethers } from "ethers";

function Header({ account, setAccount }) {
  async function connectHandler() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        const account = ethers.getAddress(accounts[0]);
        setAccount(account);
      }
    } catch (error) {
      if (error.code === 4001) {
        alert("You refused to connect. Please connect MetaMask to use this site.");
      } else {
        console.error("Connection failed:", error);
        alert("An error occurred while connecting. Please try again.");
      }
    }
  }

  function disconnectHandler() {
    setAccount(null); // Clear account state (simulate logout)
    alert("You have been logged out. Please reconnect if needed.");
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length === 0) {
          setAccount(null); // Auto logout if MetaMask disconnects
          alert("You have disconnected your wallet.");
        } else {
          setAccount(ethers.getAddress(accounts[0]));
        }
      });
    }
  }, []);

  return (
    <header>
      <p className="brand">WAGMI.fun</p>
      {account ? (
        <div className="account-actions">
          <button onClick={disconnectHandler} className="btn--fancy">
            [ logout ]
          </button>
          <button onClick={connectHandler} className="btn--fancy">
            [ {account.slice(0, 6) + "..." + account.slice(38, 42)} ]
          </button>
        </div>
      ) : (
        <button onClick={connectHandler} className="btn--fancy">
          [ connect ]
        </button>
      )}
    </header>
  );
}

export default Header;
