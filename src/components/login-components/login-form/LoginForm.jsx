import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./LoginForm.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Usuario autenticado:", user);
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h3>Iniciar Sesión</h3>
                {error && <p className="error-message">{error}</p>} {/* Muestra errores si existen */}
                <form onSubmit={handleLogin}>
                    <div className="login-item">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-item" id="password-container">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-item">
                        <button type="submit" className="register-button">Iniciar sesión</button>
                    </div>
                </form>

                <div className="login-item">
                    <button className="google-login-button">
                        <FontAwesomeIcon id="google-icon" icon={faGoogle} />
                        Iniciar sesión con Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;