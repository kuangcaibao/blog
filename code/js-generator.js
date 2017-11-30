/*

const funcB = callback => {
  
  setTimeout( () => {

    let result = 100;
    callback(result);

  }, 1000);
}

const funcA = () => {
  
  funcB( result => {

    // 处理逻辑要放到这里

  });

  // funcA 中处理 funcB 回调的结果都要移到回调中做
}

*/ 

// exp 1
// const fetch = require("node-fetch");

// function* gen() {

//     let url = `https://api.github.com/users/github`;
//     let result = yield fetch(url);
//     console.log(result);
// }

// let g = gen();
// let result = g.next();

// // 这里还是要使用 promise 的方式来取值啊

// result
// .value
// .then( data => data.json())
// .then( data => {
//     g.next(data);  // 通过这个 next 把应答的值付给 result, 然后打印出来
// });

// exp 2
// 下面我们来对 setTimeout 的方式进行改写

const foo = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(1000);
        }, 1000);
    });
}

const funcB = function *() {
    let result = yield foo();
    console.log(result);
}

// const f = funcB();
// let handler = f.next();
// handler.value.then( result => f.next(result));

/*
    这里看到，我们在函数 funcB 中，调用 foo 异步函数的时候，达到了一个同步的效果

    下面的几行代码，可能是系统包装的，这里能否做成一个自动执行的函数呢？

    正常的代码编写习惯是，我们不习惯写下面的那几行代码，怎么写？？？

    这个时候的一般做法是来个封装
*/ 
const gWrapper = generatorFunc => {

    let g = generatorFunc();

    let next = value => {

        let res = g.next(value);
        if(!res.done) {
            if(res.value.constructor.name.toLowerCase() == "promise") {
                res.value.then( data => next(data));
            }
            else {
                next(res.value);
            }
        }
    }

    next();
}

gWrapper(funcB);