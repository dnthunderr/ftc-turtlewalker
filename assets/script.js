// Simple JS for contact form and small interactions
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const teamEmail = document.getElementById('team-email').getAttribute('href').replace('mailto:','');

  if(!name || !email || !message){
    alert('Please complete all fields.');
    return;
  }

  const subject = encodeURIComponent('Website contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);

  // Open user's email client with pre-filled subject/body
  window.location.href = `mailto:${teamEmail}?subject=${subject}&body=${body}`;
});

// Small progressive enhancement: replace placeholder video iframes later via JS if needed
