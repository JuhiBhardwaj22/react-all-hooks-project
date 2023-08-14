import { useState } from "react";
import { userInfo } from "../../helper/constant/constant";

function WithoutUseMemo() {
  const [users, setUsers] = useState(userInfo);
  console.log("WithoutUseMemo - info");
  return (
    <div>
      <h1>Without useMemo</h1>
      <p>
        Causes performance issue because on every re-render of the component,
        the users array is filtered and sorted again and again.
      </p>
      <p>
        If the users array contains a lot of data it will slow down the
        application.
      </p>
      <div>
        <ul>
          {users
            .map((user) => ({
              id: user.id,
              name: user.name,
              age: user.age,
            }))
            .sort((a, b) => a.age - b.age)
            .map(({ id, name, age }) => {
              console.log("WithoutUseMemo - Re-render");
              return (
                <li key={id}>
                  {name} - {age}
                </li>
              );
            })}
        </ul>
      </div>
      <button
        onClick={() => {
          setUsers([
            ...users,
            {
              id: Date.now(),
              name: "Merry",
              age: 50,
              isSingle: false,
            },
          ]);
        }}
      >
        Add User Info
      </button>
    </div>
  );
}

export default WithoutUseMemo;
