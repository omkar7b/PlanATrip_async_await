function buyCar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Buy new Car')
        },5000)
    })
}

function planATrip() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Plan A Trip');
        },2000)
    })
}

function reachManali() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Reached Manali')
        },1000)
    })
}

function mountains() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Reached Mountains');
        },1000)
    })
}


let fun1 = async() =>  {
    try {
        const mgs = await buyCar();
        console.log(mgs);
    
        const mgs1 = await planATrip();
        console.log(mgs1);
        
        const mgs2 = await reachManali();
        console.log(mgs2);
    
        const mgs3 = await mountains();
        console.log(mgs3);
    
    }
    catch (e) {
        console.log(e);
    }
    
} 

fun1();