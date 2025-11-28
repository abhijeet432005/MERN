import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const siteStructure = [
    {
      section: "Categories",
      items: [
        "Street Fashion",
        "Sneakers",
        "Watches",
        "Jackets & Coats",
        "Shoes",
      ],
    },
    {
      section: "Important Pages",
      items: ["Home", "About us", "Shop", "Gallery Page", "FAQ", "Contact"],
    },
    {
      section: "Blog Category",
      items: ["All Stories", "Marketing", "Editorials", "Press Releases"],
    },
    {
      section: "Others",
      items: ["Style Guide", "Activity Log", "FAQ", "Contact", "About"],
    },
    {
      section: "CMS Pages",
      items: ["Shop", "Blog", "Author Page", "Category", "Terms Utils"],
    },
    {
      section: "Terms Utils",
      items: [
        "Cookies Policy",
        "Terms & Conditions",
        "Privacy Policy",
        "Licenses",
      ],
    },
  ];
  return (
    <div className="w-full bg-black text-white mt-10 p-10 flex flex-col gap-10 font-[font-1]">
      <section className="sec-1 w-full flex md:justify-between md:items-end font-[font-1] md:flex-row flex-col gap-y-5">
        <div className="flex gap-x-5 capitalize text-4xl md:text-7xl">
          {/* <h1>home</h1> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " font-bold text-gray-400/50 "
                : ""
            }
          >
            home
          </NavLink>
          <span className="text-gray-500">/</span>
          {/* <h1>shop</h1> */}
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? " font-bold text-gray-400/50 "
                : ""
            }
          >
            shop
          </NavLink>
        </div>

        <button className="px-4.5 py-3 bg-gray-500/40 w-fit mt-5 md:mt-0">
          Contact Us
        </button>
      </section>

      <div className=" bg-gray-400 w-full h-px"></div>

      <section className="sec-2 grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-8">
        {siteStructure.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h1 className="mb-8">{section.section}</h1>
            {section.items.map((item, index) => (
              <p
                key={index}
                className="text-gray-400 translate-all duration-300 hover:text-white text-sm"
              >
                {item}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className="sec-3 flex md:justify-between md:items-center mt-10 items-start md:flex-row flex-col">
        <div>
          <p className="text-sm flex items-center gap-x-3">
            Terms page <span>|</span> Styleguide <span>|</span> Changelog
          </p>
          <p className="text-gray-500/80 text-sm mt-5">
            &copy;2025 AapkiDukkan - All right reserved
          </p>
        </div>

        <div className="flex gap-8 items-center mt-8 md:mt-0">
          <div className="p-4 border rounded-full">
            <BsLinkedin className="" />
          </div>
          <div className="p-4 border rounded-full">
            <BsInstagram className="" />
          </div>
          <div className="p-4 border rounded-full">
            <BsTwitterX className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
