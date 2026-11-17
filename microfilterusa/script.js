const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}));
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{dialog.querySelector('img').src=button.dataset.photo;dialog.querySelector('img').alt=button.querySelector('img').alt;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal()}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
