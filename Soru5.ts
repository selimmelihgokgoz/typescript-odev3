type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

function search(param: number): User | undefined;	//overload imzaları id name
function search(param: string): User[];

function search(param: number | string): User | User[] | undefined {
  
  // 'param' number ise ID ile arayın (find)
  // 'param' string ise name ile arayın (filter)
    if (typeof param === "number") {
    return users.find(user => user.id === param);
    }
    else {
    return users.filter(user => user.name === param);
    }
}

console.log(search(1));
console.log(search("Ayşe"));