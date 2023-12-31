# TheWinningProject
School project to demonstrate how authentication works

# Table of contents

1. [Authentication](#Authentication)
2. [Animations](#Animations)
3. [Contributors](#Contributors)

## Authentication
* When the enter button is pressed we covert the password to SHA-256:
  ```shell
    async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
   ```
* We then compare the hashes
  ```shell
       const enteredPassword = passwordInput.value;
       const enteredPasswordHash = await hashPassword(enteredPassword);

      if (enteredPasswordHash === correctPassword) {
        alert("Correct Password");
      } else {
        alert("Wrong Password");
      }
   ```  
## Animations
* The animations were made to be super simple:
  ```shell
      setTimeout(function() {
      document.getElementById('introText').classList.add('fade-out');
      document.getElementById('introText').classList.add('hidden');
    }, 3000);
   ```  
## Contributors
* [Franco](https://github.com/Altyd)
* [Jesse](https://github.com/Altyd)
* [Yentl](https://github.com/Altyd)