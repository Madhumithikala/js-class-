let goToGoa = (success, failure) => {
    let acc_bal = 8000;
    if (acc_bal >= 4000) {
        success("Go and Enjoy")
    } else {
        failure("Go to prostack")
    }
}
goToGoa((msg) => { console.log(msg) }, (err) => { console.log(err) })
