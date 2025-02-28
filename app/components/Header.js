import { useEffect } from "react";
import { ethers } from "ethers";

function Header({ account, setAccount }) {
  async function connectHandler() {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("MetaMask is not installed! Please install it to connect.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        const account = ethers.getAddress(accounts[0]); // Normalize address
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
    setAccount(null);
    alert("You have been logged out. Please reconnect if needed.");
  }

  useEffect(() => {
    if (!window.ethereum) return;

    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        setAccount(null);
        alert("You have disconnected your wallet.");
      } else {
        setAccount(ethers.getAddress(accounts[0]));
      }
    }

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    
    // Cleanup listener when component unmounts
    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  return (
    <header>
      <p className="brand">WAGMI.fun</p>
      {account ? (
        <div className="account-actions">
          <button onClick={disconnectHandler} className="btn--fancy">
            [ logout ]
          </button>
          <button className="btn--fancy">
            [ {account.slice(0, 6) + "..." + account.slice(-4)} ]
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
