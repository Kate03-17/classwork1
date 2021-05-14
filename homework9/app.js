// n2
function addition(n1, n2){
    return n1 + n2;
}

// n3
function output(text, size="100%"){
    document.write("<p style='font-size:"+ size + "'>"+ text + "</p>")
}

// n4
function table(width){
    document.write("<table style='width:"+ width +"; height: 300px;'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
}

// n5
function table2(height){
    document.write("<table style='height:"+ height +"; width: 70%;'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")

}

// n6

function table3(height, width){
    document.write("<table style='height:"+ height +"; width:"+ width +"'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")

}

// n7

function table4(color){
    document.write("<table style='background-color:"+ color +"' class='deftable'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
}

// n8 
function table5(borderW){
    document.write("<table style='border-width:"+ borderW +"' class='deftable'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
}

// n9 
function table6(height, width, color, borderW){
    document.write("<table style='height:"+ height +"; width:"+ width +"; background-color:"+ color +"; border-width:"+ borderW +"'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
}

// n11
function simplenums(){
    for(i = 0; i<10; i++){
        console.log(i)
    }
}

// n12
function simplenumsN(n){
    for(i = 0; i<n; i++){
        console.log(i)
    }
}

// n13
function simplenumsMN(m, n){
    for(i = m; i<n; i++){
        console.log(i)
    }
}

// n14
function simplenumsMN2(m, n){
    if(n>m){
        for(i = m; i<n; i++){
            console.log(i)
        }
    }else if(m>n){
        for(i = n; i<m; i++){
            console.log(i)
        }
    }
}

// n15 - 17 -?

// n18

function num(x){
    ls = []
    less = []
    for(i=0; i<12; i++){
        num = Math.floor(Math.random() * 100) + 10;
        ls.push(num)
    }
    for (i = 0; i < ls.length; i++){
        if(ls[i] < x){
            less.push(ls[i])
        }
    }
    return "less: " + less + "<br>more: " + ls
}

document.write(num(32))