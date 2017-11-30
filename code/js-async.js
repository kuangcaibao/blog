let foo = (msg, sec) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("good job");
        }, sec);
    })
}

let foo2 = sec => {

    setTimeout( () => "hello boy", sec);
}

async function timeout(msg, sec) {

    let ret = await foo(msg, sec);
    console.log(ret);   // good job

    ret = await foo2(sec);
    console.log(ret);   // undefined
}

timeout("hello world", 1000);