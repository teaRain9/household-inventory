import { useContext } from "react";
import ActiveContext from "@/store/active-context";

function SettingPage() {

  const activeCtx = useContext(ActiveContext)
  activeCtx.onChangeCategory("more")


  return (
    <div className="mt-28">
      <h1 className=" text-white">settings page</h1>
    </div>
  )
}

export default SettingPage;