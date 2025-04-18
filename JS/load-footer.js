// js/load-footer.js
fetch('/shared/footer.html')
    .then(res => {
        if (!res.ok) throw new Error('Failed to load footer');
        return res.text();
    })
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    })
    .catch(err => {
        console.error('Error loading footer:', err);
    });
