// loading a page
// window.onload = function() {

//     setTimeout(function() {
//         document.querySelector('.loader').style.display = "none";
//         document.querySelector('body').style.overflow = "scroll";
//     }, 1000);
// };

//scroll animation

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('header a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(`${e.target.hash}`).scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            });
        });
    });

//animation button
    const butDrop = document.querySelectorAll('.butDrop button');

        butDrop.forEach(item => {

            item.addEventListener('click', () => {
                if (item.name == 'ent') {
                    hideList('dropListProf');
                    dropList('dropList');
                } else {
                    hideList('dropList')
                    dropList('dropListProf');
                }
            });
        });

    function dropList(list) {
        document.querySelector(`.${list}`).classList.toggle('drop_active');
    }

    function hideList(list) {

        let drop = document.querySelector(`.${list}`);

        if (drop.classList.contains('drop_active')){
            drop.classList.remove('drop_active');
        }
    }
});