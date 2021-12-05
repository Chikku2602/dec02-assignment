let calc={

    'sum_apply':function(a,b,c){
        let result=a +b +c;
        console.log(result);



    },

    'mul_apply':function(a,b,c){
        let result=a * b  *c;
        console.log(result);



    },

    'sum':function(){
        let  result=this.num1+this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result=this.num1*this.num2;
        console.log(result);
    },
    'div':function(){
        let  result=this.num1/this.num2;
        console.log(result);
    },
    'diff':function(){
        let  result=this.num1-this.num2;
        console.log(result);
    },
    'mod':function(){
        let  result=this.num1%this.num2;
        console.log(result);
    }
};

var set1={
    'num1':10,

    'num2':15,
};

var set2={
     array:[5,25,35],
};

var set3={
    'num1':20,

    'num2':40,


}


console.log("ALL FUNCTIONS USING CALL");
console.log("sum of 10 and 15");
calc.sum.call(set1);
console.log("multipy of 10 and 15");
calc.mul.call(set1);
console.log("substraction of 10 and 15");
calc.diff.call(set1);
console.log("module of 10 and 15");
calc.mod.call(set1);



console.log("ALLTHE FUNCTIONS APPLY CALL");
console.log("sum of 5 and 25 and 35");
calc.sum_apply.apply(set2,set2.array);
console.log("multiply of 5 and 25 and 35");
calc.mul_apply.apply(set2,set2.array);




console.log("ALL THE FUNCTIONS BIND CALL ");
console.log("sum of 20 and 40 using bind");
let new_sum=calc.sum.bind(set3);
new_sum();
console.log("multiply of 20 and 40 using bind");
let new_mul=calc.mul.bind(set3);
new_mul();
console.log("substraction of 20 and 40 using bind");
let new_diff=calc.diff.bind(set3);
new_diff();
console.log("mod of 20 and 40 using bind");
let new_mod=calc.mod.bind(set3);
new_mod(); 