
    function showPage(pageId) {
      
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      // Show target page
      document.getElementById('page-' + pageId).classList.add('active');

      if(pageId === 'yes') {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
