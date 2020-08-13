var count=0;
function like()
{
    let likecount=document.querySelector("#like")
    count++;
    likecount.innerHTML=count;

}

// function dislike()
// {
//     let dislikecount=document.querySelector("#dislike")
//     count--;
//     dislikecount.innerHTML=count;
// }

function comment()
{
    let inpValue = document.querySelector("#inp").value;
    let cloneValue= document.querySelector("#placeComment").cloneNode(true);
    cloneValue.innerHTML=inpValue;
    let commentsDiv= document.querySelector("#commentDiv");
    commentsDiv.insertBefore(cloneValue,commentsDiv.firstChild)
}