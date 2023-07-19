import Users from "@/components/Users";
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function IndexPage() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div>
      <h1>Index</h1>
      <Users users={users} />
    </div>
  );
}
