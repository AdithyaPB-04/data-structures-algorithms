//time complexity gives how much time an algorithm take to execute
function sumOfArray(nums){
    let sum = 0;                         //1
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];                    //loop "N"
    }
    return sum;                          //1
}
/*
O(N+2)
we can remove the 2 ->constant

O(N)
*/


function sumOfMatrix(nums){
    let sum=0;                           //1
    for(let i=0; i<nums.length;i++){     //N
        for(let j=0;j<nums.length;j++){  //N
            sum+=nums[i][j]
        }
    }
    return sum;                          //1
}
/*
N*N =N**2
O(N**2+2)
remove constant
O(N**2)
*/

function fn(nums){
    let arr = []                 //1
    for(let i=1;i<nums;i=i*2){   //if 16 [1,2,4,8] for 1024 [1,2,4,8,16,62,128,256,512,1024]
        arr.push(i);
    }
    return arr;                  //1
}
/*
O(log2​(N))
O(log(N))
*/

function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}
/*
10^(digits)
O(log10N)
O(logN)
*/

/*
1. Linear increment

for (let i = 0; i < n; i++) { ... }

    O(n) – runs n times.

    If i += k → O(n/k) ≈ O(n).
2. Linear decrement

for (let i = n; i > 0; i--) { ... }

    O(n) – same as increment.

3. Exponential growth

for (let i = 1; i < n; i *= 2) { ... }

    O(log n) – i doubles each time.

    If i *= 3, i *= 10, still O(log n) (base of log ignored in Big‑O)

Nested loops (independent)

4. for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) { ... }
}

    O(n × m) – multiply loops if independent.

    If m ≈ n → O(n²).


5. Nested loops (dependent)

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) { ... }
}

    O(n²) – inner loop depends on i, roughly n(n‑1)/2 iterations.

6. Logarithmic in outer loop, linear in inner

for (let i = 1; i < n; i *= 2) {     // log n times
    for (let j = 0; j < n; j++) { ... }  // n times
}

    O(n × log n) – multiply complexities.

Quick rule of thumb

    += → linear O(n)

    *= → logarithmic O(log n)

    Nested? Multiply.

    Inner loop depends on outer? Often leads to O(n²) or similar.
*/
