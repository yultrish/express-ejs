const btn = document.querySelector('.submit');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    
   let url = '/home?username=yultrish';
   let url2 = 'http://localhost:3070/home?username=yultrish';
   console.log(url)
   window.location.href = url;
   
});