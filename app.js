const previous = document.getElementById('previous');
const upcoming = document.getElementById('upcoming');
const preCards = document.getElementById('previousEvents');
const upcards = document.getElementById('upcomingEvents');

previous.addEventListener('click', ()=>{
    upcards.style.display = "none";
    preCards.style.display = "flex";
    previous.classList.add('btnpe');
    previous.classList.remove('btnue');
    upcoming.classList.add('btnue');
    upcoming.classList.remove('btnpe');
    console.log("hello");
});

upcoming.addEventListener('click', ()=>{
    upcards.style.display = "flex";
    preCards.style.display = "none";
    previous.classList.add('btnue');
    previous.classList.remove('btnpe');
    upcoming.classList.add('btnpe');
    upcoming.classList.remove('btnue');
    console.log("hello");
});
