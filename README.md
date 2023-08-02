# TheWinningProject
School project to demonstrate how authentication works

# Table of contents

1. [Contributors](#Contributors)
2. [Authentication](#Authentication)
3. [Messages](#messages)
4. [Merging](#merging)
5. [Contributors](#Contributors)

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
  }
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
    });
  });
   ```  
## Contributors
* [Franco](https://github.com/Altyd)
* [Jesse](https://github.com/Altyd)
* [Yentl](https://github.com/Altyd)
