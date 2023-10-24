let menu=d.querySelector('section');
let navitems=d.querySelector('.nav-items');

menu.onclick=()=>{
    menu.class.toggle('bx-x');
    nav-DataTransferItemList.classList.toggle('active')
};



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top <offset +height){

            navLinks.forEach(link=>{
                navLinks.classList.remove('active');
                document.querySelector('header nav-items a [href* =' + id + ']').classList.add('active');
            })
        }
    })
}