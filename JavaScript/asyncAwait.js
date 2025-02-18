/*
async function asAw(){
    var a=15
    setTimeout(function(){
        console.log("Hello");
    },5000)
    console.log(await a)
}
console.log(asAw().then((res)=>console.log(res)))
*/

//Instgram console Demo for post,like,comment,share

likeCode=async ()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost("Liked Post Successfully")
        },5000);
    })
}

commentCode=async ()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("Commented Post Successfully")
        },5000);
    })
}

shareCode=async ()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("Shared Post Successfully")
        },5000);
    })
}

async function postCode(){
    var post=new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("Post Created Successfully")
        },5000);
    })
    const[pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(pos);
    console.log(like);
    console.log(comment);
    console.log(share);
}
postCode()