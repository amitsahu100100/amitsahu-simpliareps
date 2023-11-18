$( document ).ready(function() {
    // Add a class on click in body
    $( ".navbar-toggler" ).click(function() {
        document.body.classList.toggle("open");
    });
    $( ".menu-closeicon" ).click(function() {
        document.body.classList.remove("open");
    });
    $( ".admin-overlay").click(function() {
        document.body.classList.remove("open");
    });

    // For input type file
    const actualBtn = document.getElementById('actual-btn');
    const fileChosen = document.getElementById('file-chosen');
    actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
    })
   
});
