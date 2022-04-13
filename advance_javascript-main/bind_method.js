const youtuber1={
        name:"thapa technical1",
        content:"programing1",
}
const youtuber2={
    name:"thapa technical2",
    content:"programing2",
}
const youtuber3={
    name:"thapa technical3",
    content:"programing3",
}
function features(rating){
    console.log(`my name is ${this.name},i m doing ${this.content} and rating =${rating}`)
}
const you1=features.bind(youtuber1)
you1(5)
// const you2=features.bind(youtuber2)
// you2(4)
// const you3=features.bind(youtuber3)
// you3(1)




