'use client';
import React, { useState } from "react";

interface DataInterface {
  username: string;
  password: string;
}

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: DataInterface = { username, password };
    console.log(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Quizz Date</h1>
        <h1>bem-vinda, Elida Mendes!</h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
