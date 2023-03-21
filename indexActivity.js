console.log("Hello, Welcome to De La Salle University");
function computeSupply(age, amountPerDay){
    const maxAge = 100;
    const amountRemaining = Math.round((maxAge - age) * amountPerDay * 365);

    console.log(`You need ${amountRemaining} to last you until the ripe of old age of ${maxAge}`);
}
computeSupply(70, 2.5);
computeSupply(30, 3);
computeSupply(60, 5);
