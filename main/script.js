  document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "7b86e763af0073ba3344874559885a3cb81b509ca88f131d52325b9da4a05d26";
    const loginForm = document.getElementById("loginForm");
    const lockContainer = document.getElementById("lockContainer");
    const verificationResultt = document.getElementById("verificationResult");
    const passwordInput = document.getElementById("password");
    const container = document.querySelector(".container");
    const sha256Section = document.createElement("div");
    sha256Section.id = "sha256Section";
    sha256Section.innerHTML = `
      <div class="container2">
      <h4>🔒 SHA-256 Conversion 🔒</h4>
      </div>
      <p>Enter plain text:</p>
      <input id="plainTextInput" placeholder="Plain text">
      <button type="button" onclick="convertToSHA256()">Convert to SHA-256</button>
      <p id="sha256Result"></p>
      <p id="explanation">What is SHA-256?</p>
      <p id="explanation">SHA-256 is like a magic machine that turns any input into a fixed-size, unique code that is hard to guess or reverse-engineer. It's widely used to secure data, passwords, and ensure the integrity of digital information.</p>
      <h3>Why is Authentication important?</h3>
      <p>Authentication is crucial in general because it provides a way to verify the identity of users, devices, or entities attempting to access a system, application, or network. It serves as a fundamental security mechanism to protect sensitive information, prevent unauthorized access, and maintain the integrity and confidentiality of data.</p>
      <h3>Why is Authentication important to the environment?</h3>
      <p> Strong authentication measures can promote the adoption of secure digital processes and transactions, reducing the reliance on physical documents and paperwork. This shift to digital reduces the need for paper production, transportation, and disposal, ultimately lowering the carbon footprint associated with paper-based processes.</p>
      <button type="button" onclick="credits()">View Project Credits</button>
      <button onclick="window.location.href='https://github.com/Altyd/TheWinningProject';">
      Full Code Of Project
      </button>
      `;
    sha256Section.style.display = "none";
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const enteredPassword = passwordInput.value;

      // Hash the entered password using the hash function
      const enteredPasswordHash = await hashPassword(enteredPassword);

      if (enteredPasswordHash === correctPassword) {
        // Hide login elements
        lockContainer.style.display = "none";
        loginForm.style.display = "none";
        verificationResultt.style.display = "none";

        // Show the SHA-256 section
        container.appendChild(sha256Section);
        sha256Section.style.display = "block";
      } else {
        // Incorrect password
        const verificationResult = document.getElementById("verificationResult");
        verificationResult.textContent = "Incorrect password. Please try again.";
      }
    });
  });

  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  function convertToSHA256() {
    const plainTextInput = document.getElementById("plainTextInput");
    const sha256Result = document.getElementById("sha256Result");
    const inputText = plainTextInput.value;

    // Calculate the SHA-256 hash using CryptoJS
    const sha256Hash = CryptoJS.SHA256(inputText).toString();

    sha256Result.textContent = `SHA-256: ${sha256Hash}`;
  }
  function credits() {
    sha256Section.innerHTML = `
      <div class="container2">
      <h4>🔒 Credits 🔒</h4>
      </div>
      <h3>Franco</h3>
      <p>Developer, Funding, Frontend, Backend</p>
      <h3>Yentl</h3>
      <p>Frontend suggestions</p>
      <h3>Jesse</h3>
      <p>Project Name</p>
      <p>Frontend suggestions</p>
      <div class="container2">
      <h4>🔒 Project Information 🔒</h4>
      </div>
      <p>This project made use of Html,CSS and Javascript. This project is fully open source if anyone is interested in seeing how the authentication system works behind the scenes. I (Franco) have many similiar projects check them out if your interested</p>
      <button onclick="window.location.href='https://github.com/Altyd/TheWinningProject';">
      Full Code Of Project
      </button>
      <h3>Franco's Other Projects:</h3>
      <button onclick="window.location.href='https://fakesnaps.com';">
      FakeSnaps.com
      </button>
      <button onclick="window.location.href='https://nbn.digital';">
      NBN.Digital
      </button>
      <button onclick="window.location.href='https://github.com/Altyd/simpledo';">
      SimpleDO To Do List
      </button>
      `;
  }
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
    // The animations
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
      document.getElementById('franco').classList.add('hidden');
      document.getElementById('jesse').classList.remove('hidden');
    }, 18000);
    
    setTimeout(function() {
      document.getElementById('jesse').classList.add('fade-out');
      document.getElementById('jesse').classList.add('hidden');
    }, 21000);
    
    setTimeout(function() {
      document.getElementById('jesse').classList.add('hidden');
      document.getElementById('yentl').classList.remove('hidden');
    }, 24000);
    
    setTimeout(function() {
      document.getElementById('yentl').classList.add('fade-out');
      document.getElementById('yentl').classList.add('hidden');
    }, 27000);
    
    setTimeout(function() {
      document.getElementById('loginForm').classList.remove('hidden');
      document.getElementById('lockContainer').classList.remove('hidden');
      document.getElementById('headerrr').classList.remove('hidden');
    }, 30000);
    