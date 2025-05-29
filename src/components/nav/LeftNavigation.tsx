import { useLocation } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import "./LeftNavigation.css";

function LeftNavigation({ name }: { name: string }) {
  const logo = ["logo.png"];
  const { pathname } = useLocation();
  const subpage = pathname.split("/")[1];

  const Linkness = (type: string) => {
    let classes = "rounded-xl p-2";

    if (type === subpage) {
      classes += " bg-gray-700";
    }

    return classes;
  };
  return (
    <nav className="sidebar">
      <header>
        <div className="image_text">
          <span className="image">
            <img src={logo[0]} alt="profile" />
          </span>
          <div className="text header_text">
            <span className="name">BOHECO II</span>
          </div>
        </div>
        <FaCaretRight className="toggle" />
      </header>
    </nav>
    // <div className="hidden min-h-screen w-[200px] flex-col items-center justify-between gap-4 bg-gray-800 pt-4 text-white lg:flex">
    //   <div className="flex flex-col gap-8">
    //     {/* Profile */}
    //     <div className="flex flex-col items-center gap-4">
    //       <img className="h-20 w-20 rounded-full" alt="avatar" src={img[0]} />
    //       <div>Hello, {name}</div>
    //     </div>
    //     {/* User */}
    //     <div className="flex flex-col gap-4">
    //       <Link className={Linkness("dashboard")} to="/dashboard">
    //         Dashboard
    //       </Link>
    //       <Link className={Linkness("leave")} to="/leave">
    //         Leave
    //       </Link>
    //       <Link className={Linkness("report")} to="/report">
    //         My Report
    //       </Link>
    //       <Link className={Linkness("pending")} to="/pending">
    //         Approval Pending
    //       </Link>
    //     </div>
    //     {/* Admin With Roles */}
    //     <ul className="flex flex-col gap-4">
    //       <li>Admin Actions</li>
    //       <li>Leave Balance</li>
    //       <li>Get Leave History</li>
    //       <li>Update Emp Info</li>
    //     </ul>
    //   </div>
    //   <div>Logout</div>
    // </div>
  );
}

export default LeftNavigation;
