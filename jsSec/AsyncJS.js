// Call Stack

/// On peut utiliser l'outils debugger de "sources" a cote de la console pour visualiser la pile des appels

// WebAPI && single thread
// l'interpretieur de JS n'a qu'un seul fils d'execution
// et pour certaines fonctions (ex: setTimeout()) qui necessitent une gestion de facon asynchrone, il utilise l'API
// pour deleguer la function a' un autre fils d'exec 

//----------------------------------------------------------------------------

// CallBacks (nested callbacks: Callback hell)
// Imbrication de callback qui rend rapidement difficile la lisibilite' du code 
let i = 0;
const colors = ["red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
]
const delayedBackground = (delay, nextFunc) => {
    if (i === 6) {
        i = 0;
        setInterval(() => {
            document.body.style.backgroundColor = colors[i];
            i += 1;
            nextFunc();
        }, delay);
    }
    // setTimeout(() => {
    //     document.body.style.backgroundColor = colors[i];
    //     i += 1;
    //     nextFunc();
    // }, delay);

    setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i += 1;
        nextFunc();
    }, delay);
}

delayedBackground(1000, () => {
    // delayedBackground(1000, () => {
    //     delayedBackground(1000, () => {
    //         delayedBackground(1000, () => {
    //             delayedBackground(1000, () => {
    //                 delayedBackground(1000, () => {
    //                     delayedBackground(1000, () => {
    //                         delayedBackground(1000, () => {
    //                             delayedBackground(1000, () => {

    //                             });
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });
});

// const inc = (dela, nexx) => {
//     if (i === )
//         i = 0
//     setTimeout(() => {

//         i += 1;
//         numb = i;
//         console.log(numb);
//         nexx && nexx();
//     }, dela);
// }

// inc(
//     1000, () => {
//         inc(
//             1000, () => {
//                 inc(
//                     1000, () => {
//                         inc(
//                             1000, () => {
//                                 inc(
//                                     1000, () => {
//                                         inc(
//                                             1000, () => {
//                                                 inc(
//                                                     1000, () => {
//                                                     }
//                                                 )
//                                             }
//                                         )
//                                     }
//                                 )
//                             }
//                         )
//                     }
//                 )
//             }
//         )
//     }
// )

// const unCallBack = (valeur, funcSucces, funcEchec) => {
//     if (/* une condition*/) { }
//     else {
//         // autre chose
//     }
// }

//  PROMISES comme solution au callback HELL d'une facon plus elegante

// Traditional way
// fakeRequestPromise('URL').then(() => {
//     console.log(" Page 1 success")
//     fakeRequestPromise('URL').then(() => {
//         console.log(" Page 2 success")
//         fakeRequestPromise('URL').then(() => {
//             console.log(" Page 3 success")
//         }).catch(() => {
//             console.log("Error on page 3")
//         })
//     }).catch(() => {
//         console.log("Error on page 2")
//     })
// }).catch(() => {
//     console.log("Error on page1")
// })

// //Much cleaner way

// fakeRequestPromise('URL').then(() => {
//     console.log(" Page 1 success")
//     return fakeRequestPromise('URL 1')
// })
//     .then(() => {
//         console.log(" Page 2 success")
//         return fakeRequestPromise('URL 2')
//     })
//     .then(() => {
//         console.log(" Page 3 success")
//         return fakeRequestPromise('URL 3')
//     }).catch(() => {
//         console.log("Failed request")
//     })

// A promise is resolved or rejected, with some return value

const delayedBackgroundWithPromise = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}


// delayedBackgroundWithPromise('red', 1000)
//     .then(() => delayedBackgroundWithPromise('orange', 1000))
//     .then(() => delayedBackgroundWithPromise('yellow', 1000))
//     .then(() => delayedBackgroundWithPromise('green', 1000))
//     .then(() => delayedBackgroundWithPromise('blue', 1000))
//     .then(() => delayedBackgroundWithPromise('indigo', 1000))
//     .then(() => delayedBackgroundWithPromise('violet', 1000))
//     .then(() => delayedBackgroundWithPromise('red', 1000))

//Syntax
new Promise((resolved, rejected) => {
    // body
    resolved(); // To resolve
})

// Async functions
// Are a nicer form of Promises

// Await

async function changeBack() {
    await delayedBackgroundWithPromise('red', 1000)
    await delayedBackgroundWithPromise('yellow', 1000)
    await delayedBackgroundWithPromise('green', 1000)
    await delayedBackgroundWithPromise('blue', 1000)
}

changeBack()