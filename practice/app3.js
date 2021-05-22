

// // N1

// function table(m, n){
//     tb = "<table>"
//     arr = []
//     for(i=0; i<=m*n; i++){
//         var notPrime = false;
//         for (var j = 2; j < i; j++) {
//             if (i%j===0) {
//                 notPrime = true;
//             }
//         }
//         if (notPrime === false) {
//                arr.push(i) 
//         }
//     }
    
//     for(i=0; i<m; i++){
//         tr = "<tr>"
//         for(j=0; j<n; J++){
//           td = "<td>"  
//             td += arr[-1]
//             arr.pop()
//           td += "</td>"
//           tr += td 
//         }
//         tr += "</tr>"
//         tb += tr
//     }
//     tb += "</table>"
//     return tb
    
// }
// document.write(table(5,4))


// // N2

// function create_table(m, n){
//     tb = "<table>"
//     for(i=0; i<m; i++){
//         tb += "<tr>"
//         for(j=0; j<n; J++){
//           tb = "<td>"  
//         //   tb += arr[-1]
//         //   arr.pop()
//           tb += "Hello"
//           tb += "</td>"
           
//         }
//         tb += "</tr>"
        
//     }
//     tb += "</table>"
//     document.write(tb)
// }

// create_table(3,4)