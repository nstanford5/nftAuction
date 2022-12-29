md5: 0205f5a034e69c1258ec38f37c92b937  index.mjs
md5: ae17b7d75b615cbac282ca0d776c6735  index.rsh
# {#nft-auction-api} NFT Auction

This tutorial will teach you how to build an NFT Auction DApp with Reach.

It *probably* will not increase the floor price of your favorite NFT line, but you never know until you try.

We are assuming prior knowledge of Reach. 
We recommend working through the [tutorials](https://docs.reach.sh/tut/#tuts) in order.

We assume you are working in a project folder called `nft-auction-api`:
```cmd
$ mkdir nft-auction-api
$ cd nft-auction-api
```

Start by creating your files:
```cmd
$ touch index.rsh index.mjs
```

## Program Design

The purpose of our program is to sell an NFT to the highest bidder. 
We'll need a Creator to establish the sale, provide the NFT, and allow an unknown number of Buyers to place bids in network tokens.

The contract will store the NFT until the deadline has passed and we have a winner for the auction.

There are a few different options for how the contract actually processes the bid funding. In this implementation, we'll retain the value of `highestBid` in the contract account. If a new high bid is placed, we will return the previous amount to the previous bidder and retain the new `highestBid`.

At the end of the Auction, the highest bidder is transferred the NFT and the contract transfers the network token funds to the Creator.

Next, we define our users and their functions.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 1-13
```
- Line 4 declares a single `{!rsh} Participant` identified as 'Creator'.
- Line 5 declares a function `getSale` that will return an Object with sale parameters.
- Line 10 declares an `auctionReady` function for notifying the frontend that the contract is ready to accept API calls for the auction.
- Line 11 is a function to share bid information with the Creator's frontend.
- Line 12 is a function useful for displaying the results of the Auction.

The final set of users in our application is the `bidder`. This set of users will all have the same functionality, so we define them as `{!rsh} API`.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 14-16
```
- Line 14 declares our `Bidder` `{!rsh} API`.
- Line 15 declares the function these users will have access to `bid`.

It will also be useful for the frontend implementation for us to define some `{!rsh} View` information.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 17-22
```
- Line 17 declares an anonymous `{!rsh} View`.
- Line 18-20 set the types and identifiers for the information.
- Line 22 calls `{!rsh} init`() to initialize our Application.

## Set the Sale

Now that our users and their data is defined, we can start moving through the states of our application.

The first state is to get the parameters of the sale from the Creator and publish them to the blockchain.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 24-29
```
- Line 24 starts a local step for Creator
- Line 25 declassifies the parameters returned from the `getSale()` function
- Line 27 publishes this information to the blockchain
- Line 28 sets a constant in consensus to denote the amount of NFTs
- Line 29 calls `{!rsh} commit`() to move to the next Step of the program

```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 30-32
```

- Line 30 prompts the users account to sign the transaction to pay their NFT into the contract account.
- Line 31 notifies the frontend that the contract has been deployed and is ready to start receiving API calls.
- Line 32 is a static assertion that, at this point in the program, the contract account must hold the one NFT. If not, return the message at compile time.

## Use the View

Now that we have this information set, we use our `{!rsh} View` to easily expose this information to the frontend. 
Now our Bidders can see the sale information, as it lives on the blockchain, without spending any transaction fees.

```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 33-34
```
- Lines 33-34 set respective view identifiers to previously published constants for the minimum bid and NFT id.

Now that the parameters of our sale are set, we can go to our frontend (`mjs`) file and start building our test suite.

We'll start with basic setup and account tasks. We won't cover these line by line.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 1-9
```

## Launch the Token

Next, we automate the NFT process. `{!js} launchToken`() is simply a convenient way to test with NFTs in devnet. 
When moving to testnet and ultimately MainNet, you will likely allow the Creator to provide the NFT id as a string.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 10-15
```
- Line 11 uses `{!js} launchToken`() to create a new devnet NFT
- Line 12-14 set constants related to the parameters
- Line 15 sets the parameters object to include those constants. This will eventually be passed to the backend.
:::note
Here is an example of selling the Algorand MainNet Token, our beloved 'Reach Thank You Token'.
```const REACH_THANK_YOU = '545293434';```
```const balance = await stdlib.balanceOf(wallet, REACH_THANK_YOU);```
[Source for token id](https://algoexplorer.io/asset/545293434)
:::

NFTs are represented differently on different consensus networks. 
On Algorand they will return a `BigNumber` and on EVM-based networks they will return an `{!rsh} Address`.

So we define a helper function to differentiate between networks.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 17-23
```
- Line 17 is our function signature, `getTok` takes in one parameter `x`.
- Line 18 checks if the connector is set to 'ALGO'.
- Line 19-21 return values accordingly.

## Creator Tests

Let's jump down our test suite and define the tests for our Creator. 
Note the significant line number change.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 64-79
```
- Line 64 sets the contract handle with `accCreator`.
- Line 65 starts the promise on the contract handle for our Creator object.
- Lines 66-79 are simple JavaScript functions to be called by the backend.

## Log the Balance

While we are here, at the end of our test suite, let's add the final balance logs.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 81-85
```
- Line 81 starts a loop for all members of the `bidders` array.
- Line 82 uses `stdlib.balancesOf` to check account balances related to the NFT id.

We are at the end of our `mjs` file, but we don't want to get too far ahead of ourselves yet. 
We still need to setup the Auction in the Reach (`rsh`) file.

## Bidding with ParallelReduce

Hopefully you are becoming familiar with Reach at this point and you have seen the immensely useful control structure `{!rsh} parallelReduce`.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 35-40
```
- Line 35 uses the `lenInBlocks` parameter provided and adds that to the last known consensus time. This creates a deadline at `lenInBlocks` in the future.
- Line 36-40 sets up LHS values to track in the `{!rsh} parallelReduce` and gives them initial values.

Now we will use the `{!rsh} parallelReduce.define()` block to track the LHS value `lastPrice`.

```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 41-43
```
- Line 41 allows us to set a window into the state of this consensus variable, successfully exposing it to the frontend to be displayed to potential API callers.

Now we setup our loop condition and `{!rsh} invariant` statements.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 44-46
```
We won't walk through each of these for this one, but instead focus on the repeating pattern that emerges from this style of Reach DApp.

Most importantly, we note the relationship between the contract balance and our variables. 
We track the balance of both network and non-network tokens, very tightly. 
This makes the Reach compiler (and therefore, us) happy.

Now let's setup our API member function `Bidder.bid`.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 47-58
```
- Line 47 declares our function as an api macro (`.api_`) taking one argument `bid`.
- Line 48 is a dynamic check that the number provided for the bid is higher than the `lastPrice` of the NFT.
- Line 49 starts the outer return. Prompts the caller to pay `bid` and declares our return function as `notify`.
- Line 50 invokes that return function with `highestBidder, lastPrice` values.
- Line 51 checks that this is not the first bid. If it is the first bid, we have no previous bidder to refund.
- Line 54 stores the callers Address. As a reminder, `this` in an API call refers to the callers address.
- Line 55 passes bid values to the Creators frontend.
- Line 56 starts the inner return to update our `{!rsh} parallelReduce` values.


## Timeout

Now we can setup a timeout for callers who don't respond with a bid.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 59-62
```
- Line 59 starts the timeout and passes it our previously declared `end` constant.
- Line 60 is a necessary dummy `{!rsh} publish`.
- Line 61 returns LHS values as they are.

## Transfer Pattern

We can now write the final transfer pattern.
```
load: /examples/nft-auction-api/index.rsh
md5: ae17b7d75b615cbac282ca0d776c6735
range: 64-68
```
- Line 64 transfers the nft to the winner.
- Line 65 is another check for the special condition `isFirstBid`.
- Line 66 logs information to the Creator frontend.

That is all for our backend Reach file! Isn't this fun!?

## Back to the Test Suite

Before we have too much fun, let's finish writing our frontend test suite.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 25-28
```
- Line 27 is the function we'll call at `auctionReady`, when we are ready to start making API calls.
- Line 28 sets a variable for the minimum bid amount. This will be added to by each of our simulated users.

Now the functionality for each of our users will live mostly in `runBidder`. 
We are automating this process, so we'll let the console logs tell you who is doing what.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 29-40
```
- Line 29 declares our `runBidder` function.
- Line 30 creates an increment to add to our bid variable.
- Line 31 adds that increment to the bid.
- Line 33-36 creates a new account, sets a debug label, opts-in to the NFT and adds user information to the global frontend array of users.
- Line 37 gets the contract handle for the Creators contract instance.
- Line 38 defines a helper function for returning the balance of the account.

Our users are alive (sort of) and deciding to make bids and API calls. 
Now we'll show our exposed `{!rsh} View` information related to the sale.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 41-54
```
- Line 41 starts a `try...catch` block, we expect some exceptions from these calls.
- Line 42 gets the NFT view information and uses our `getTok` function to return the right data type, based on network connector mode.
- Lines 43-44 are similar to Line 42 minus the `getTok` function
- Line 48 is our API call. We pass in the `bid` and grab the returned values.

Just a few more lines and we are ready to run our tests.

We created the functions that handle our users, now we need to run instances to simulate our users.
```
load: /examples/nft-auction-api/index.mjs
md5: 0205f5a034e69c1258ec38f37c92b937
range: 56-62
```

## Run a Test

That is everything we need! 

Let's run this and sell some NFTs.
```cmd
$ ./reach run
```
:::note
the `export REACH_CONNECTOR_MODE=...` is left out here intentionally. This program will work on all supported networks.
:::

You will see output that looks like this:
```
Creating test account for Creator
Having creator create testing NFT
Creator sets parameters of sale: {
  nftId: '0xD432f1213F4fb778d655B5d06AB899F38E42D51B',
  minBid: BigNumber { _hex: '0x1bc16d674ec80000', _isBigNumber: true },
  lenInBlocks: 10
}
Alice decides to bid 6.082853048407074.
Alice balance before is 100
Alice sees the NFT up for sale is 0xD432f1213F4fb778d655B5d06AB899F38E42D51B.
Alice sees the minimum bid is 2.
Alice sees the current bid is 2.
Alice out bid 0xDb9d8A04617E4b481C2fE4541eCECAD399a7012E who bid 2.
Alice balance after is 93.917046651065577397
Bob decides to bid 8.6390332297723713.
Bob balance before is 100
Bob sees the NFT up for sale is 0xD432f1213F4fb778d655B5d06AB899F38E42D51B.
Bob sees the minimum bid is 2.
Bob sees the current bid is 6.082853048407074.
Bob out bid 0x4AE823Bca405b165a92d4ce07F91008FC99aBD29 who bid 6.082853048407074.
Bob balance after is 91.36084928420295664
Claire decides to bid 9.9381701474207071.
Claire balance before is 100
Claire sees the NFT up for sale is 0xD432f1213F4fb778d655B5d06AB899F38E42D51B.
Claire sees the minimum bid is 2.
Claire sees the current bid is 8.6390332297723713.
Claire out bid 0x4aaf26F5fb6187031D6531dD4B7bC9a4D32A0d87 who bid 8.6390332297723713.
Claire balance after is 90.061712366560260168
Creator saw that 0x4AE823Bca405b165a92d4ce07F91008FC99aBD29 bid 6.082853048407074.
Creator saw that 0x4aaf26F5fb6187031D6531dD4B7bC9a4D32A0d87 bid 8.6390332297723713.
Creator saw that 0xC0A7deA0B554d92138dc7e48721d30037becEfAa bid 9.9381701474207071.
Creator saw that 0xC0A7deA0B554d92138dc7e48721d30037becEfAa won with 9.9381701474207071
Alice has 99.999899699472651397 ETH and 0 of the NFT
Bob has 99.99988251397532794 ETH and 0 of the NFT
Claire has 90.061712366560260168 ETH and 1 of the NFT
```

Congrats on another useful Reach DApp under your belt!

To expand upon this, you could implement a standard web2 frontend with a framework like React. 
We will be adding this piece to this tutorial soon, maybe you can beat us to it?
