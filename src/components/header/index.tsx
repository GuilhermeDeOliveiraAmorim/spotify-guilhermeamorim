import React from "react";

function Header() {
    return (
        <header className='flex justify-between items-center bg-background-base p-4 text-text-base'>
            <h1>
                Nome
            </h1>
            <div className="flex justify-between items-center gap-6">
                <h2>
                    Guilherme Amorim
                </h2>
                <img src="https://avatars.githubusercontent.com/u/5620529?v=4" className="rounded-full h-10" />
            </div>
        </header>
    )
}

export { Header };