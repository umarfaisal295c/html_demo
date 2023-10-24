const activePage=window.location.pathname;
const navitems=document.querySelector('nav-items a');
forEach(Link=>{
    if(link.href.includes('${activePage}')){
        link.classList.add('active');
    }
})