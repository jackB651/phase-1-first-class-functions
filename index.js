function receivesAFunction(spy){
     return spy();
}
function returnsANamedFunction(){
     return function hotshot (){ 
        console.log('thank you')};
}
function returnsAnAnonymousFunction(){
     return function (){
        console.log('tada')
     };
}