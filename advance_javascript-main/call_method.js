// const youtuber1={
//     name:"thapa technical",
//     content:"programing",
//     features:function(rating,support){
//         console.log(`very friendly way of teaching.${this.name} is my fav ${this.content} channel.I wil love to give ${rating} star.please ${support} ${this.name} channel`)
//     }
// }
// const youtuber2={
//     name:"kuchbhi",
//     content:"vlogs"
// }
// youtuber1.features.call(youtuber1,5,"subscribe")





const dic1={
    name:"jabeena",
    class:"12th",
    rollno:12,
    features:function(course,age){
        console.log(`my name is ${this.name} i m pursueing of ${this.class} class and my rollno is ${this.rollno} and i am doing ${course},i am ${age} years old`)
    }
}
const dic2={
    name:"aabiru",
    class:"12th",
    rollno:13,
}
const dic3={
    name:"puja",
    class:"graduation",
    rollno:1
}
dic1.features.call(dic2,"softwarengenering",18)