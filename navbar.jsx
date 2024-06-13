import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="navbar bg-black text-white px-[1em] fixed">
          <div class="flex-1">
            <a class="btn btn-ghost mid tab:text-3xl">NetFlixe</a>
          </div>
          <div class="flex-none gap-2">
            <div class="form-control   text-red-700">
              <input
                type="text"
                placeholder="search"
                class="input input-bordered w-7 mobile:w-28 midmobile:hover:w-32 tab:w-32  "
              />
            </div>
            <div class="dropdown dropdown-end">
              <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle avatar"
              >
                <div class="w-10 rounded-full hover:">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.pinimg.com/736x/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.jpg"
                  />
                </div>
              </div>
              <ul
                tabindex="0"
                class="mt-3 z-[1] p-2 shadow  text-red-700 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a class="justify-between ">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
