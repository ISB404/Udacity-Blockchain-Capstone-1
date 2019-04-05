# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 
# test the contract 

cd eth-contracts
npm install
make sure you have ganache-cli running 
ganache-cli -a 50 -e 100
in an another terminal run the below tests
truffle test test/TestSolnSquareVerifier.js 
truffle test test/TestSquareVerifier.js 
truffle test test/TestERC721Mintable.js 

#  Contract Addresses, Contract Abi's, OpenSea MarketPlace Storefront link's
Contract Address:
 

 Deploying 'Verifier'
   --------------------
   > transaction hash:    0xa00168bbdc7c979220b4e44d8fbe35388242682e9862830c5f65a4cff9138335
   > contract address:    0x2f48e53c3590Dcdef45f96847b0fe368c20b2155
   > account:             0x854AEA2dF207be01a0808c95468a37F2231290c9

Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x86ad309c130891f33cb005ebd95a3a6153198e912fa2e388dbedbf2ef684467f
   > contract address:    0xe8eC6f2448a81BC570329483C99a4223Ea453963
   > account:             0x854AEA2dF207be01a0808c95468a37F2231290c9

Contract Abi's:
/eth-contract/build/contracts/meshalContract.json 

OpenSea MarketPlace Storefront link's:
https://rinkeby.opensea.io/category/meshalcontractv4

 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
