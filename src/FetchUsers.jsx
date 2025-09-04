import { useState, useEffect } from "react";

export default function FetchUsers() {
  // State buat nampung data user hasil fetch
  const [users, setUsers] = useState([]);

  // useEffect jalan sekali doang pas komponen pertama kali render (karena [] kosong)
  useEffect(() => {
    // Ambil data dari API palsu (jsonplaceholder)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // ubah hasilnya jadi JSON
      .then((data) => setUsers(data)); // simpen data ke state 'users'
  }, []);

  return (
    <section>
      <div>
        {/* Judul biar keren */}
        <h1>FetchUsers</h1>

        {/* List user, di-loop pake map */}
        <ul>
          {users.map((user) => (
            // key wajib biar React ga rewel
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
