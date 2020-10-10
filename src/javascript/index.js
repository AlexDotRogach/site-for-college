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
    const butDrop = document.querySelectorAll('.butDrop button'),
          dropListes = document.querySelectorAll('.dropList');

        butDrop.forEach(item => {

            item.addEventListener('click', () => {
                dropListes.forEach(list => {

                    if (list.getAttribute('atr') == item.getAttribute('atr') && 
                    list.classList.contains('drop_active')) {
                        console.log(list);
                        hideList(dropListes);
                        
                    } else if (list.getAttribute('atr') == item.getAttribute('atr')) {
                        hideList(dropListes);
                        dropList(list);
                    }
                });
            });
        });

    function dropList(list) {

        list.classList.toggle('drop_active');
    }

    function hideList(arr) {

        arr.forEach(item => {

            if (item.classList.contains('drop_active')) {
                item.classList.remove('drop_active');
            }
        });
    }
});