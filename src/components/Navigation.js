import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return (
        <div class="navigation">
            <Link class="nav home" to="/">Home</Link>
            <Link class="nav about" to="/about">About</Link>
            {/*
            <a>가 아니라 <Link>를 사용하는 이유 : 새로고침 하지 않고 빠른 페이지 전환이 가능하다.
            */}
        </div>
    );
}

export default Navigation;