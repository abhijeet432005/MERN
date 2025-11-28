import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { laodCat } from "../../store/reducers/productSlice";


const DropDownMenu = () => {
  const cat = useSelector(state => state.productsSlice.Selectedcategory)
  const dispatch = useDispatch()
  const dropDownRef = useRef(null);
  const dropMenuRef = useRef(null);
  const ItemRef = useRef([]);
  const [dropOpen, setdropOpen] = useState(false);
  const [selectedCat, setselectedCat] = useState("Category");
  const tl = useRef(null);

  const CategotyItem = ["smartphones", "fragrances", "laptops", "motorcycle", 'tablets', 'sunglasses'];

  useGSAP(() => {
    gsap.set(dropMenuRef.current, { height: 0, opacity: 0 });
    gsap.set(ItemRef.current, {
      autoAlpha: 0,
      y: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(dropDownRef.current, {
        borderRight: 1,
        borderLeft: 1,
        duration: 0.5,
      }).to(
        ItemRef.current,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "<"
      ).to(
        dropMenuRef.current,
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          // ease: "power2.out",
          pointerEvents: "auto",
        },
        "<=0.2"
      );
  });

  const toggelDrop = () => {
    if (dropOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setdropOpen(!dropOpen);
  };

  return (
    <div className="border-y relative font-thin">
      <button
        onClick={toggelDrop}
        ref={dropDownRef}
        className="flex gap-4 items-center justify-between p-3  w-44"
      >
        <span id="selected" className="text-xl font-thin capitalize">
          {cat === null ? selectedCat : cat}
        </span>
        <span className="">▼</span>
      </button>

      <ul ref={dropMenuRef} className="absolute text-start border w-44 z-10">
        {CategotyItem.map((elem, index) => {
          return (
            <li
              onClick={() => {
                setselectedCat(elem);
                tl.current.reverse();
                setdropOpen(false);
                dispatch(laodCat(elem))
              }}
              ref={(el) => (ItemRef.current[index] = el)}
              className={`p-3 bg-[#FFFFFF] text-[1rem] capitalize ${
                index !== CategotyItem.length - 1 ? "border-b" : ""
              }`}
              key={index}
            >
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownMenu;
