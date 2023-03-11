import ActiveContext from "@/store/active-context";
import { useContext } from "react";

function AddNewPage() {

    const activeCtx = useContext(ActiveContext)
    activeCtx.onChangeCategory("add-new")
  

    return (
      <div className="mt-28"> 
        <h1 className="text-white">Add new shopping item</h1>
      </div>
    ); 
}

export default AddNewPage;