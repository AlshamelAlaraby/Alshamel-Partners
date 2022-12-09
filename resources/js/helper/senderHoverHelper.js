export default function (e){
    let items = document.querySelectorAll('.sender-search .Sender');
    items.forEach(e => e.classList.remove('active'));
    e.target.classList.add('active');
}
