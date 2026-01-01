// ES6 - Module
// There are two types of exports: Named and Default.

//Default Exports
const message = () => {
    const name = "Tobias";
    const age = 20;
    return `${name} is ${age} years old.`;
}

export default message;