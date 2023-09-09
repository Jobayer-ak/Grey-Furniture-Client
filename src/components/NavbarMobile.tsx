import { RxCross1 } from 'react-icons/rx';

interface IMobileMenu {
  setToggleOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

function NavbarMobile(props: IMobileMenu) {
  const { setToggleOpen } = props;

  const handleToggleIcon = () => {
    setToggleOpen(false);
  };

  return (
    <div className="">
      <div>
        <div>
          <RxCross1 size={22} color="black" onClick={handleToggleIcon} />
        </div>

        <ul>
          <li className="">Drop Down 1</li>
          <li className="">Drop Down 2</li>
          <li className="">Drop Down 3</li>
          <li className="">Drop Down 4</li>
          <li className="">Drop Down 5</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarMobile;
