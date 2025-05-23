
import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaSwatchbook,
  FaProjectDiagram,
  FaSearch,

} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextSharp, IoNotifications } from "react-icons/io5";
import { IoIosNotifications,IoMdArrowDropdown,IoMdArrowDropup   } from "react-icons/io";
import { TbActivityHeartbeat, TbLayoutNavbarCollapse } from "react-icons/tb";

import PortfolioSectionAdmin from "../components/portfoliosectionadmin/page";
import TambahPortfolio from "../components/tambahportfolioadmin/page";
import Header from "../components/header/header";
import SidebarAdmin from "../components/sidebar/sidebar";

const PortfolioPage = () => {
  return (
    <>
      
<Header/>
{/* <!-- ========== MAIN CONTENT ========== --> */} 
      <div className="-mt-px">
        {/* <!-- Breadcrumb --> */}
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex items-center py-2">
            {/* <!-- Navigation Toggle --> */}
            <button
              type="button"
              className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-application-sidebar"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-application-sidebar"
            >
              <span className="sr-only">Toggle Navigation</span>
              <TbLayoutNavbarCollapse />
            </button>
            {/* <!-- End Navigation Toggle --> */}

            {/* <!-- Breadcrumb --> */}
            <ol className="ms-3 flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                Application Layout |
              </li>
              <li
                className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
            {/* <!-- End Breadcrumb --> */}
          </div>
        </div>
        {/* <!-- End Breadcrumb --> */}
      </div>

      {/* <!-- Sidebar --> */}
      <SidebarAdmin />
      {/* <!-- End Sidebar -->

<!-- Content --> */}
      <div className="w-full lg:ps-64">
        <div className="p-4 pt-0 sm:p-6 space-y-4 sm:space-y-6">
          {/* // <!-- Features --> */}
          <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <PortfolioSectionAdmin />
          </div>
          {/* <!-- End Features --> */}
        </div>
      </div>
      {/* <!-- End Content -->
<!-- ========== END MAIN CONTENT ========== --> */}
    </>
  );
};

export default PortfolioPage;
