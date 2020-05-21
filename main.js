
function addition(num1, num2) {
    return num1 + num2
}

function error() {
    throw new Error('ERRORRRRRR');
}

function objectTest() {
    return {
        status: 'success',
        data: 'hello world'
    }
}


module.exports = {
    addition: addition,
    error: error,
    objectTest: objectTest
}