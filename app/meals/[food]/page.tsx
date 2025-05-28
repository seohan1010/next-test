'use client'
import { use } from "react"
import { useParams } from "next/navigation";




const Food = ({params}) => {

    const param = useParams();
    const food: any = use(params);

    console.log('param from useParam',param);
    console.log('param from props (using use function)',food.food )

return <>

    <div>
        <p>

       this is meal use {food.food}!
        </p>
        <p>
            this is meal useParams {[param.food]}
        </p>
    </div>

</>

}


export default Food;

