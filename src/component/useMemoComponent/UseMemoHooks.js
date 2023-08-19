import { useState } from "react";
import { userInfo } from "../../helper/constant/constant";
import { useMemo } from "react";
import { useEffect } from "react";
import WithoutUseMemo from "./WithoutUseMemo";
import UseMemoExample from "./UseMemoExample";

function UseMemoHooks() {
  const [users, setUsers] = useState(userInfo);

  console.log("usememo before return");

  const sortedUser = useMemo(() => {
    return users
      .map((user) => ({
        id: user.id,
        name: user.name,
        age: user.age,
      }))
      .sort((a, b) => a.age - b.age); // decending order
  }, [users]);
  return (
    <div>
      <WithoutUseMemo />
      <h1>Using useMemo</h1>
      <p>
        If we use the useMemo hook, the users array will be filtered and sorted
        only when the users dependency is changed.
      </p>
      <p>Improve the performance</p>
      <div>
        <ul>
          {sortedUser.map(({ id, name, age }) => {
            console.log("useMemo - Re-render");
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

      <UseMemoExample />
    </div>
  );
}

export default UseMemoHooks;
