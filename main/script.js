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
  
particlesJS("particles-js", {
  particles: {
    number: {
      value: 168,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
document.getElementById('loginForm').classList.add('hidden');
document.getElementById('lockContainer').classList.add('hidden');
document.getElementById('headerrr').classList.add('hidden');
    // Your existing JavaScript code here
    
    // Animation-related JavaScript code from the previous website
    setTimeout(function() {
      document.getElementById('introText').classList.add('fade-out');
      document.getElementById('introText').classList.add('hidden');
    }, 3000);

    setTimeout(function() {
      document.getElementById('introText').classList.add('hidden');
      document.getElementById('secondText').classList.remove('hidden');
    }, 6000);

    setTimeout(function() {
      document.getElementById('secondText').classList.add('fade-out');
      document.getElementById('secondText').classList.add('hidden');
    }, 9000);

    setTimeout(function() {
      document.getElementById('secondText').classList.add('hidden');
      document.getElementById('franco').classList.remove('hidden');
    }, 12000);

    setTimeout(function() {
      document.getElementById('franco').classList.add('fade-out');
      document.getElementById('franco').classList.add('hidden');
    }, 15000);
    setTimeout(function() {
      document.getElementById('yentl').classList.remove('hidden');
    }, 15000);
    setTimeout(function() {
      document.getElementById('yentl').add('fade-out');
      document.getElementById('yentl').classList.add('hidden');
    }, 15000);
    setTimeout(function() {
      document.getElementById('yentl').classList.add('hidden');
      document.getElementById('loginForm').classList.remove('hidden');
      document.getElementById('lockContainer').classList.remove('hidden');
      document.getElementById('headerrr').classList.remove('hidden');
    }, 18000); // Hiding Fran content after 3 seconds (total time: 18 seconds)
    
    
