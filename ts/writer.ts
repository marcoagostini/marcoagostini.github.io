async function Main() : Promise<any> {
    const author = "Marco Agostini";
    const name = document.querySelector("#name");
    for(let i = 0; i <= author.length; i++) {
        name.innerHTML = author.slice(0, i);
        await delay(150);
    }

}

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

Main();
