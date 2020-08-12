function handleMouseover()
{
    console.log("I have succesfully called.");
    var id2Element=document.querySelector('.beautiful');
    id2Element.style.background = 'pink';
    id2Element.style.color = 'red';
    id2Element.innerHTML='hello karad'
}
function handleMouseout()
{
  console.log('I have logged.');
   var id2Element=document.querySelector('.beautiful');
   id2Element.style.background ="black";
   id2Element.style.color='white';
   id2Element.innerHTML="helo world"

}