import React from "react";
import  Container from "../Container/container";
import Logo from "../logo";
import LogoutBtn from "./logoutBtn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function header() {

  const navigate = useNavigate();
  const authstatus = useSelector((state) => state.auth.status);
  const navitems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authstatus },
    { name: "Signup", slug: "/signup", active: !authstatus },
    { name: "All Posts", slug: "/allPosts", active: authstatus },
    { name: "Add Post", slug: "/addPost", active: authstatus },
  ];

  return (
    <header className="bg-gray-300 shadow">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex">
            {navitems.map((item)=>item.active ? (
              <li key={item.name} className="mr-4">
                <button className="px-6 duration-200 hover:bg-gray-300 rounded-md" onClick={()=>navigate(item.slug)}>{item.name}</button>
              </li>
            ):null
            )}
            {authstatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default header;
