import React from "react";

const UserStatic = ({ data }) => {
  if (!data) {
    return <h2>No users</h2>;
  }
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id.value}>
            {user.name.title} {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api?results=5");
  const data = await res.json();

  return { props: { data: data.results }, revalidate: 10 };
}

export default UserStatic;
