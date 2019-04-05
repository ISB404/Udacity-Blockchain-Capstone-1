const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const MNEMONIC = "gather account order iron runway open purpose sick short chair brain calm"
const INFURA_KEY = "1ee2aa47c46746e59cbbbcdebd87abde"
const NFT_CONTRACT_ADDRESS = "0xA5a4ADd7061dED9794611cdD51e71a8358e3282c"
const OWNER_ADDRESS = "0x854AEA2dF207be01a0808c95468a37F2231290c9"
const NETWORK = "rinkeby"
const NUM_CREATURES = 1
const NUM_LOOTBOXES = 4
const DEFAULT_OPTION_ID = 0
const LOOTBOX_OPTION_ID = 2
var  proofs = [];
const account2 = "0x4e26a3225477486a12505b76E6529Bf6489bA934"

proofs[0]= {
  "proof":
  {
      "A":["0x712a26513f243339aa792675965b0315ca7683cb5c67fc89b9a5a24cea98ce2", "0x2a7ab188cb5917dfe0d0a13ba9987e3686de407ac54d01d4d77379fd7ddbb407"],
      "A_p":["0x2801a294b312185cc089e59b22cf438aa9e127adcbe222cdea292f4bd4581caa", "0x27d767e7112a2336b6616f07bf04486b7b061066a92147c3e366c8c5e04115b4"],
      "B":
          [["0x23cf18b20ab000abd4115832a302c3cef49182df139bf86d0365d9f353e3303c", "0x109533641de4f8b475ecc189d4cb7b2eddbe715e39a5bfd7e48a959e3b0fdb26"], ["0x23b9cfeece4b12f98c23a0203231cc55043565e5cff6ca14b3167fb4c6ccd5d0", "0x194d83bdaade1cf929374d69b3d7ecd6722ac89f4bff10a3bc468d0fd8e9c1c9"]],
      
      "B_p":["0x7df50c1861460be3432a0489cd7236b561051e65cfd13b02199b2179773190b", "0xb59d9564fb7c5d055293f464ba93c41474c55314652109f97b48fe49bf10156"],
      "C":["0x28db031ef06c2592e0bb867b6a3c41c6fb43aeb9792ed2b41f27df24c7ee4d01", "0x21a88b8aa8f9da91588167d3528139307050dec98b9377089c83549f827e0046"],
      "C_p":["0x2d65dfd81b455b3b64d50efce17502f54233f6b4ae0f7b825aff3880445b0b58", "0x26458e53ec435d590bc7e6cd59db7bf7aeae137213eceace5f5f6c161e8fdf38"],
      "H":["0x300aa045b71b13edf5b0ad4b2822f820366c8b65418aae65e9974eb25c1c2a23", "0x21958d56392845b091db5cd6cfa849044dd11c9fe4110385bf04e7b08ee8a4f2"],
      "K":["0x1898d3cd59e243ea1e1f336a786ad9ba482748da60400a48b009a11cb3c9b7cf", "0x699e7bf863aec2d6efb2f70534bf0fdf52b8ade594946a23f63c5417c01c412"]
  },
  "input":[9,1]
}
if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const CONTRACT_ABI = require('./eth-contracts/build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_ABI.abi;

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )

    if (NFT_CONTRACT_ADDRESS) {
        const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { from:OWNER_ADDRESS, gasLimit: "1000000" })

        // Creatures issued directly to the owner.
        // for (var i = 0; i < NUM_CREATURES; i++) {
            try{
              
                        
                      
                
                const result = await nftContract.methods.mintNewNFT(
                    account2, 
                2, 
                proofs[0].proof.A, 
                proofs[0].proof.A_p, 
                proofs[0].proof.B, 
                proofs[0].proof.B_p, 
                proofs[0].proof.C, 
                proofs[0].proof.C_p, 
                proofs[0].proof.H, 
                proofs[0].proof.K, 
                proofs[0].input
            ).send({ from: OWNER_ADDRESS, gas:  5510328});
              
            console.log("Minted Token. Transaction: " + result); 
          
          } catch(error){
                console.log("error in minting token ",error);
              }


        //  }
    } 

  //   else if (FACTORY_CONTRACT_ADDRESS) {
  //     const factoryContract = new web3Instance.eth.Contract(FACTORY_ABI, FACTORY_CONTRACT_ADDRESS, { gasLimit: "1000000" })

  //     // Creatures issued directly to the owner.
  //     for (var i = 0; i < NUM_CREATURES; i++) {
  //         const result = await factoryContract.methods.mint(DEFAULT_OPTION_ID, OWNER_ADDRESS).send({ from: OWNER_ADDRESS });
  //         console.log("Minted creature. Transaction: " + result.transactionHash)
  //     }

  //     // Lootboxes issued directly to the owner.
  //     for (var i = 0; i < NUM_LOOTBOXES; i++) {
  //         const result = await factoryContract.methods.mint(LOOTBOX_OPTION_ID, OWNER_ADDRESS).send({ from: OWNER_ADDRESS });
  //         console.log("Minted lootbox. Transaction: " + result.transactionHash)
  //     }
  // }
}

main()