import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');

    const onChangeHandler = (event) => {
        if (username.includes('o') || username.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
            setUsername(username.replace(/o/gi, ''));
        }
        else {
            setUsername(event.target.value);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (username.includes('o') || username.includes('O') || username == '') {
            alert('Usuario inválido para registrarse');
        }
        else {
            alert(`Usuario ${username} registrado correctamente!`);
        }
        setUsername('');
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            id="username" 
                            placeholder="Ingrese un username" 
                            onChange={onChangeHandler}
                            value={username}/>
                            <Form.Text className="text-muted">
                                Rec0rdá n0 usar la letra pr0hibida.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
