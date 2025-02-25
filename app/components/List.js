import { ethers } from "ethers";

function List({ toggleCreate, fee, provider, factory }) {
  async function listHandler(form) {
    const name = form.get("name");
    const ticker = form.get("ticker");

    const signer = await provider.getSigner();

    const transaction = await factory
      .connect(signer)
      .create(name, ticker, { value: fee });
    await transaction.wait();

    toggleCreate();
  }

  return (
    <div className="list">
      <h2 >List new token</h2>

      <div className="list__description">
        <p>fee: {ethers.formatUnits(fee, 18)} ETH</p>
      </div>

      <form action={listHandler}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="ticker" placeholder="ticker" />
        <input type="submit" value="[ list ]" />
      </form>

      <button onClick={toggleCreate} className="btn--fancy">
        [ cancel ]
      </button>
    </div>
  );
}

export default List;

// import { useState } from "react";
// import { ethers } from "ethers";

// function List({ toggleCreate, fee, provider, factory }) {
//   const [name, setName] = useState("");
//   const [ticker, setTicker] = useState("");

//   const handleNameChange = (e) => setName(e.target.value);
//   const handleTickerChange = (e) => setTicker(e.target.value);

//   async function listHandler(e) {
//     e.preventDefault(); // Prevent the default form submission

//     // Log the form values
//     console.log("Form values:", { name, ticker });

//     if (!name || !ticker) {
//       console.error("Please provide both name and ticker for the token.");
//       return;
//     }

//     // Check if provider and factory are initialized
//     if (!provider || !factory) {
//       console.error("Provider or factory not initialized.");
//       return;
//     }

//     try {
//       // Check if signer is available
//       const signer = provider.getSigner();
//       console.log("Signer:", signer);

//       // Sending the transaction to list the token
//       const transaction = await factory
//         .connect(signer)
//         .create(name, ticker, { value: fee });

//       console.log("Transaction sent:", transaction);

//       // Wait for the transaction to be confirmed
//       await transaction.wait();
//       console.log("Transaction confirmed!");

//       toggleCreate(); // Close the form after listing the token
//     } catch (error) {
//       console.error("Error listing token:", error);
//     }
//   }

//   return (
//     <div className="list">
//       <h2>list new token</h2>

//       <div className="list__description">
//         <p>fee: {ethers.formatUnits(fee, 18)} ETH</p>
//       </div>

//       <form onSubmit={listHandler}>
//         <input
//           type="text"
//           name="name"
//           placeholder="name"
//           value={name}
//           onChange={handleNameChange}
//         />
//         <input
//           type="text"
//           name="ticker"
//           placeholder="ticker"
//           value={ticker}
//           onChange={handleTickerChange}
//         />
//         <input type="submit" value="[ list ]" />
//       </form>

//       <button onClick={toggleCreate} className="btn--fancy">
//         [ cancel ]
//       </button>
//     </div>
//   );
// }

// export default List;
