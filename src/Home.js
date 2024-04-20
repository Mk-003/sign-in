// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Homepage!</h1>
//     </div>
//   );
// };


// export default Home;


import React from "react";


function Home({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        </div>
  );
}

export default Home;