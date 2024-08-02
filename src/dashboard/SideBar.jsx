import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="bg-gray-100 h-screen"> {/* Example background color and height */}
      <Sidebar 
        aria-label="Sidebar with content separator example" 
        className="p-4 border-r border-gray-300"
        style={{ 
          width: "240px", // Adjust width as needed
        }}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="mb-2">
              <p className="ml-2">Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="mb-2">
              <p className="ml-2">Upload Book</p>
            </Sidebar.Item>
            
            <Sidebar.Item href="/shop" icon={HiShoppingBag} className="mb-2">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight} className="mb-2">
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable} className="mb-2">
              <p className="ml-2">Log Out</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
