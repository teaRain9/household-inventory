import ActiveContext from "@/store/active-context";
import { useContext, useEffect } from "react";
import AddNew from "@/components/add-new/add-new";

function AddNewPage() {

    const activeCtx = useContext(ActiveContext)

    useEffect(()=>{
      activeCtx.onChangeCategory("add-new")
    }, [])
  

    return <AddNew/>;
}

export default AddNewPage;