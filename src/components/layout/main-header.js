import ProfileIcon from "../icons/profile";

function MainHeader() {
    return (
      <header className="fixed top-0 p-8 m-0 h-15 w-full  bg-fuchsia-500">
        <div className="flex-col justify-center items-center">
            <div className="flex justify-between">
                <div>logo</div>
                <div><ProfileIcon /></div>
            </div>

        </div>
      </header>
    );
}

export default MainHeader;