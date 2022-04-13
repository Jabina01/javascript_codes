const interviewquestions=((name)=>{
    if (name==="vinod"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.plz explain us`)
        }
    }
    if (name==="thapa"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.plz explain us`)
        }
    }
    if (name==="thapatechnical"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.plz explain us`)
        }
    }
    else{
        return function(){
            console.log("welcome to interviewquestions")
        }
    }
})
interviewquestions("vinod")("UI");
interviewquestions("thapa")("full stac developer");
interviewquestions("thapatechnical")("front end developer");




// const interview=((name)=>{
//     if (name="vinod"){
//         return function(topic){
//             console.log(`hii ${name},what is mean by ${topic}`)
//         }
//     }
//     else{
//         return function(){
//             console.log("welcome to interview questions")
//         }
//     }
// })
// interview("vinod")("UI")