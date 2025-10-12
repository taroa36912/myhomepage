import { diaryEntries } from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    // ヘッダーを読み込む
    fetch('_header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
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

    // 日記エントリーを生成する
    const diaryContainer = document.getElementById('diary-entries-container');
    if (diaryContainer) {
        // importしたdiaryEntriesを使ってHTML要素を生成
        if (diaryEntries) {
            diaryEntries.forEach(entry => {
                const article = document.createElement('article');
                article.className = 'diary-entry';
                article.innerHTML = `
                    <h3>${entry.title}</h3>
                    <span class="date">${entry.date}</span>
                    <p>${entry.content}</p>
                `;
                diaryContainer.appendChild(article);
            });
        } else {
            // データが読み込めなかった場合のフォールバック
            diaryContainer.innerHTML = '<p>日記のデータを読み込めませんでした。</p>';
        }
    }
});