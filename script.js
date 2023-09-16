<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Login Button</title>
    <style>
        /* Add your styling for sections and fixed button here */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        section {
            width: 100vw;
            height: 100vh;
            position: relative;
        }

        .fixed-login-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none;
        }

        .login-button {
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    </style>
</head>
<body>
    <!-- Section 1 -->
    <section>
        <p>This is the content of section 1.</p>
    </section>

    <!-- Section 2 -->
    <section>
        <p>This is the content of section 2.</p>
        <button class="login-button">Login</button>
    </section>

    <!-- Section 3 -->
    <section>
        <p>This is the content of section 3.</p>
    </section>

    <!-- Fixed login button -->
    <button id="fixed-login-button" class="fixed-login-button">Login</button>

    <!-- Inline JavaScript -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const fixedLoginButton = document.getElementById("fixed-login-button");
            const loginButton = document.querySelector(".login-button");

            // Initially, check if the login button is visible
            checkLoginButtonVisibility();

            // Update the fixed login button visibility on scroll
            window.addEventListener("scroll", checkLoginButtonVisibility);

            function checkLoginButtonVisibility() {
                const rect = loginButton.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                if (!isVisible) {
                    fixedLoginButton.style.display = "block";
                } else {
                    fixedLoginButton.style.display = "none";
                }
            }
        });
    </script>
</body>
</html>
