    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const verificationResult = document.getElementById('verificationResult');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const enteredPassword = passwordInput.value;

      //Hash password
      async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
      }

      // Encrypted password 
      const correctPassword = '7b86e763af0073ba3344874559885a3cb81b509ca88f131d52325b9da4a05d26';

      hashPassword(enteredPassword)
        .then(hashedPassword => {
          if (hashedPassword === correctPassword) {
            verificationResult.textContent = 'Authentication successful! ✅';
          } else {
            verificationResult.textContent = 'Incorrect password! ❌';
          }
        })
        .catch(error => {
          console.error('Error hashing password:', error);
          verificationResult.textContent = 'Error verifying password!';
        });
    });
    
