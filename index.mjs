import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const deadline = 100;

const [judgeAcc, firstAcc, secondAcc, thirdAcc] =
  await stdlib.newTestAccounts(4, startingBalance);


console.log('Welcome to Miss India 2022');

const firstFinalist = {
  'name' : "Aishwarya Rai",
  'address' : firstAcc.getAddress()
};

const secondFinalist = {
  'name' : "Sushmita Sen",
  'address' : secondAcc.getAddress()
};
const thirdFinalist = {
  'name' : "Lara Datta",
  'address' : thirdAcc.getAddress()
};



console.log('Judge is deploying contract ...');
const ctcJudge = judgeAcc.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const winner = await stdlib.launchToken(judgeAcc, 'missindia', "MSINDIA")
      const runner1 = await stdlib.launchToken(judgeAcc, 'runner1', "RUNNER1")
      const runner2 = await stdlib.launchToken(judgeAcc, 'runner2', "RUNNER2")
      await winner.mint(judgeAcc, startingBalance.mul(6));
      await runner1.mint(judgeAcc, startingBalance.mul(6));
      await runner2.mint(judgeAcc, startingBalance.mul(6));

      // First finalist Opt-in the token
      await firstAcc.tokenAccept(winner.id);
      await firstAcc.tokenAccept(runner1.id);
      await firstAcc.tokenAccept(runner2.id);
      
      // Second finalist Opt-in the tokens
      await secondAcc.tokenAccept(winner.id);
      await secondAcc.tokenAccept(runner1.id);
      await secondAcc.tokenAccept(runner2.id);

      // Third finalist Opt-in the tokens
      await thirdAcc.tokenAccept(winner.id);
      await thirdAcc.tokenAccept(runner1.id);
      await thirdAcc.tokenAccept(runner2.id);

      // Prize Amount
      const amtFirst = stdlib.parseCurrency(3);
      const amtSecond = stdlib.parseCurrency(2);
      const amtThird = stdlib.parseCurrency(1)

console.log('Starting backends...');

const getFinalistAddress = (key) => {
   let address = null;
    switch (key) {
      case 0:
        address  = ctcJudge.v.BeautyQueens.first.addr
        break;

      case 1:
        address  = ctcJudge.v.BeautyQueens.second.addr
        break;  
    
      case 2:
        address  = ctcJudge.v.BeautyQueens.third.addr
        break;
    }
}


  const [voter1, voter2, voter3, voter4, voter5] =  await stdlib.newTestAccounts(5, startingBalance);
  

  const voter = async (who, index, vote1, vote2, vote3) => {
    const ctcVote = who.contract(backend, ctcJudge.getInfo());
    console.log(`Voter ${index} Checked profile of ${ctcVote.v.BeautyQueens.first.name}`)
    console.log(`Voter ${index} Checked profile of ${ctcVote.v.BeautyQueens.second.name}`)
    console.log(`Voter ${index} Checked profile of ${ctcVote.v.BeautyQueens.second.name}`)
    ctcVote.apis.Voters.voteBeautyQueen(who,vote1, vote2, vote3);
  };


  backend.Judge(ctcJudge, {

     getFinalists : () => {
        return [Object(firstFinalist), Object(secondFinalist), Object(thirdFinalist)];
    },

    prizes : async () => {
      // const winner = await stdlib.launchToken(judgeAcc, 'missindia', "MSINDIA")
      // const runner1 = await stdlib.launchToken(judgeAcc, 'runner1', "RUNNER1")
      // const runner2 = await stdlib.launchToken(judgeAcc, 'runner2', "RUNNER2")
      // await winner.mint(judgeAcc, startingBalance.mul(6));
      // await runner1.mint(judgeAcc, startingBalance.mul(6));
      // await runner2.mint(judgeAcc, startingBalance.mul(6));

      // // First finalist Opt-in the token
      // await firstAcc.tokenAccept(winner.id);
      // await firstAcc.tokenAccept(runner1.id);
      // await firstAcc.tokenAccept(runner2.id);
      
      // // Second finalist Opt-in the tokens
      // await secondAcc.tokenAccept(winner.id);
      // await secondAcc.tokenAccept(runner1.id);
      // await secondAcc.tokenAccept(runner2.id);

      // // Third finalist Opt-in the tokens
      // await thirdAcc.tokenAccept(winner.id);
      // await thirdAcc.tokenAccept(runner1.id);
      // await thirdAcc.tokenAccept(runner2.id);

      // // Prize Amount
      // const amtFirst = stdlib.parseCurrency(3);
      // const amtSecond = stdlib.parseCurrency(2);
      // const amtThird = stdlib.parseCurrency(1)
    

      return [winner, amtFirst, runner1, amtSecond, runner2, amtThird ];
    },
    
    deadline : deadline,

    checkVotes : (firstVotes, secondVotes, thirdVotes) => {
        const votes = [firstVotes, secondVotes, thirdVotes];

        let winner = Math.max(votes);
        let winnerkey = votes.indexOf(winner);
        votes.splice(winnerkey, 1);

        let runner1 = Math.max(votes);
        let runner1key = votes.indexOf(runner1);
        votes.splice(runner1key)

        let runner2 = Math.max(votes);
        let runner2key = votes.indexOf(runner2);
        votes.splice(runner2key, 1);

        return [getFinalistAddress(winner), getFinalistAddress(runner1), getFinalistAddress(runner2)]
    }
  });
;
  console.log(`Before voting ${firstFinalist.name} has token balance ${firstAcc.balancesOf([winner, runner1, runner2])}`);
  console.log(`Before voting ${secondFinalist.name} has token balance ${secondAcc.balancesOf([winner, runner1, runner2])}`);
  console.log(`Before voting ${thirdFinalist.name} has token balance ${thirdAcc.balancesOf([winner, runner1, runner2])}`);
  await voter(voter1, 1,0,0);
  await voter(voter2, 1,0,0);
  await voter(voter3, 1,0,0);
  await voter(voter4, 1,1,0);
  await voter(voter5, 1,0,1);
  console.log('Voting is closed now');

  console.log('Counting the Votes');

  console.log(`After voting ${firstFinalist.name} has token balance ${firstAcc.balancesOf([winner, runner1, runner2])}`);
  console.log(`After voting ${secondFinalist.name} has token balance ${secondAcc.balancesOf([winner, runner1, runner2])}`);
  console.log(`After voting ${thirdFinalist.name} has token balance ${thirdAcc.balancesOf([winner, runner1, runner2])}`);
