function myFunction(input){
    if (typeof input !== 'number') {
        throw new Error('Invalid INput')
    }
}
module.exports = myFunction;
