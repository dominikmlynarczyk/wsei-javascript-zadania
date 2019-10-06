function distFromAverage(tab) {

    let sum = 0;
    let newTab = [];

    for(i=0; i<tab.length; i++) {
        sum = sum + tab[i];
    }

    sum = sum/tab.length;

    tab.forEach(el => {
        newTab.push(el-sum);
    })

    return(newTab);
}

let tab = [1,2,3,4,5,6,7]

distFromAverage(tab);