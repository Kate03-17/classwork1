// // n2
// function addition(n1, n2){
//     return n1 + n2;
// }

// // n3
// function output(text, size="100%"){
//     document.write("<p style='font-size:"+ size + "'>"+ text + "</p>")
// }

// // n4
// function table(width){
//     document.write("<table style='width:"+ width +"; height: 300px;'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
// }

// // n5
// function table2(height){
//     document.write("<table style='height:"+ height +"; width: 70%;'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")

// }

// // n6

// function table3(height, width){
//     document.write("<table style='height:"+ height +"; width:"+ width +"'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")

// }

// // n7

// function table4(color){
//     document.write("<table style='background-color:"+ color +"' class='deftable'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
// }

// // n8 
// function table5(borderW){
//     document.write("<table style='border-width:"+ borderW +"' class='deftable'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
// }

// // n9 
// function table6(height, width, color, borderW){
//     document.write("<table style='height:"+ height +"; width:"+ width +"; background-color:"+ color +"; border-width:"+ borderW +"'><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>")
// }

// // n11
// function simplenums(){
//     for(i = 0; i<10; i++){
//         console.log(i)
//     }
// }

// // n12
// function simplenumsN(n){
//     for(i = 0; i<n; i++){
//         console.log(i)
//     }
// }

// // n13
// function simplenumsMN(m, n){
//     for(i = m; i<n; i++){
//         console.log(i)
//     }
// }

// // n14
// function simplenumsMN2(m, n){
//     if(n>m){
//         for(i = m; i<n; i++){
//             console.log(i)
//         }
//     }else if(m>n){
//         for(i = n; i<m; i++){
//             console.log(i)
//         }
//     }
// }

// 17
// imgs = ["<img>", "<img>", "<img>", "<img>", "<img>", "<img>", "<img>", "<img>", "<img>", "<img>"]
// function rand(){
//     rand_day = Math.floor(Math.random() * 30) + 1;
//     document.write(rand_day);
//     rand_ind = Math.floor(Math.random() * imgs.length());
//     document.write(imgs[rand_ind]);
// }

// 19 - ?

// don't know which
// // // function num(x){
// // //     ls = []
// // //     less = []
// // //     for(i=0; i<12; i++){
// // //         num = Math.floor(Math.random() * 100) + 10;
// // //         ls.push(num)
// // //     }
// // //     for (i = 0; i < ls.length; i++){
// // //         if(ls[i] < x){
// // //             less.push(ls[i])
// // //         }
// // //     }
// // //     return "less: " + less + "<br>more: " + ls
// // // }


// 20

// function st_len(text){
//     document.write(text.length)
// }

// 21

// function searchA(text){
//     count = 0
//     for(i=0; i<text.length; i++){
//         if(text[i].toLowerCase() == "a"){
//             count +=1
//         }
//     }
//     return count
// }

// console.log(searchA("ALLIBABA"))

// 24 - 25

// function getRandStr(num) {
//     var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var result = '';
//     for ( var i = 0; i < num; i++ ) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     console.log(result)
// }

// 26 - 27

// function getRandStr(word_count, str_length) {
//     var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var result = '';
//     for(i=0; i<word_count; i++){
//         for(j=0; j<str_length; j++){
//             result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//         }
//     }
//     console.log(result)
// }

// 28 - 29
// function edit(text){
//     arr = ["he", "she", "them"]
//     for(i=0; i<text.length(); i++){
//         result = text.replaceAll(arr[i], '*'*arr[i].length())
//     }
// }

// // need to check

// 30

// function unique(text){
//     // arr = text.split('')
//     // dist = new Set(arr)
//     // console.log(dist)
// }

// unique("yllaa")

// 31

function onClick(){
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var inps = document.getElementsByTagName("input")
    var min_char = inps[0];
    var max_char = inps[1];
    var min_word = inps[2];
    var max_word = inps[3];
    var sent_count = inps[4];
    result = '';
    for(i=0; i<sent_count; i++){
        for(j=min_word; j<max_word; j++){
            for(z=min_char; z<max_char; z++){
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            result += ' '
        }
        result += '<br>'
    }
    
    var ta = document.getElementById("textarea")
    ta.innerHTML = result
    
}

// 22-23-32 - ????