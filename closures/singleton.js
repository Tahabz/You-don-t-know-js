const mySingleton = (() => {

    // private variables
    let myInstance;
    let privateVariable = "some private data"
    let random_number = Math.random()

    // Create an instance of the singleton
    const createInstance = () => {
        return {
            publicVariable : "Some public data",
            publicMethod : () => {
                return random_number
            }
        }
    }
    return {
        getInstance : () => {
            // Initialize the singleton if its not been initialized yet
            if(!myInstance)
                myInstance = createInstance()
            return myInstance
        }
    }
})()

let instance1 = mySingleton.getInstance()
let instance2 = mySingleton.getInstance()
let instance3 = mySingleton.getInstance()

console.log(instance1 === instance2 && instance2 === instance3) // true