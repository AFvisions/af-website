// Load Back Button
fetch('/shared/back-button.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('back-button').innerHTML = html;
  })
  .catch(err => console.error('Back button load failed:', err));

// Load Footer
fetch('/shared/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  })
  .catch(err => console.error('Footer load failed:', err));