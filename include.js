// include.js
document.addEventListener("DOMContentLoaded", function() {
    // ヘッダーを読み込む
    fetch('_header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // ナビゲーションリンクのアクティブ状態を設定
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                    link.classList.add('active');
                }
            });
        });

    // フッターを読み込む
    fetch('_footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});