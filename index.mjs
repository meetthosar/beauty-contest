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

console.log('Starting backends...');


await Promise.all([
  backend.Judge(ctcJudge, {

     getFinalists : () => {
        return [Object(firstFinalist), Object(secondFinalist), Object(thirdFinalist)];
    },

    prizes : () => {
      const prize = await stdlib.launchToken(judgeAcc, 'missindia', "MSINDIA")
      await prize.mint(judgeAcc, startingBalance.mul(6));

      // First finalist Opt-in the token
      await firstAcc.tokenAccept(prize.id);
      
      // Second finalist Opt-in the tokens
      await secondAcc.tokenAccept(prize.id);

      // Third finalist Opt-in the tokens
      await thirdAcc.tokenAccept(firstPrize.id);

      // Prize Amount
      const amtFirst = stdlib.parseCurrency(3);
      const amtSecond = stdlib.parseCurrency(2);
      const amtThird = stdlib.parseCurrency(1)

      return [prize, amtFirst, amtSecond, amtThird];
    },
    
    deadline : deadline,

    checkVotes : (firstVotes, secondVotes, thirdVotes) => {
        const votes = [firstVotes, secondVotes, thirdVotes];

        winner = Math.max(votes);
    }
  }),
  
]);

console.log('Goodbye, Alice and Bob!');
