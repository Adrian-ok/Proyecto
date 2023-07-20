import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export function LoginForm() {
    return (
        <>
            <h3 className="text-2xl font-semibold mb-4">Acceder</h3>
            <form className="flex flex-col gap-4 w-full max-w-sm px-3">
                <div>
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                    <TextInput
                        id="email1"
                        placeholder="name@flowbite.com"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <Label
                        htmlFor="password1"
                        value="Your password"
                    />
                    <TextInput
                        id="password1"
                        required
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}
