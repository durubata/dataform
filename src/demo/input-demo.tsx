import Input from '@/components/input';
import { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Do something with form data
        console.log({ name, email, password });

        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="max-w-md mx-auto mt-12">
            <h1 className="text-3xl font-bold mb-6">Sign up</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Name" value={name} onInput={(e) => setName(e.target.value)} />
                <Input label="Email" value={email} onInput={(e) => setEmail(e.target.value)} />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                />
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default App;
