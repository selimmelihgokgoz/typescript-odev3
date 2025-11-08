// (Soru 5'teki User tipini ve users dizisini kullanın)
type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

function updateUser(
  id: number,
  updates: Partial<User>
): Readonly<User> | undefined {
  const user = users.find((u) => u.id === id);
  if (!user) {
    return undefined;
  }
  
  /* ??? */
    const updatedUser = { ...user, ...updates };
    const index = users.findIndex(u => u.id === id);
    users[index] = updatedUser;
    return updatedUser;
    
}

console.log("Eski: ", users[0]);
const updatedUser = updateUser(1, { email: "ali.yeni@mail.com" });
console.log("Yeni: ", updatedUser);