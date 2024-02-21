import { useState } from 'react';

interface Users {
    uid: string;
    name: string;
    password: string;
    cart: [];
    wishlist: [];
    email: [];
}    


export const User = () => {

    const [user, setUser] = useState<Users>();

  return (
    <div>
        <h3>LOG IN TO YOUR ACCOUNT</h3>

        <p>Sign in to view your orders, request a return, and more. And if you are also a member of the XPLR Pass loyalty program, you can enjoy a lot of exclusive benefits.
        </p>

        <p>Haven't you suscribed to XPLR Pass yet? <br></br>
            Create your account in the section of the top
        </p>

        <form onSubmit={validateForm}>
            <Input
                name="email"
                type="text"
                text="email"
                handleChange={validateMail}
                error={emailError}
                />

            <Input
                name="password"
                type="password"
                text="password"
                img="/resources/lock.svg"
                handleChange={(e: ChangeEvent) => setPassword(e.target.value)}
                error={passwordError}
            />

            

        <button>
            Login
        </button>

        {
            (!user)
                ? <pre> There is no user </pre>
                : <pre> { JSON.stringify( user )} </pre>
        }

    </div>
  )
}
