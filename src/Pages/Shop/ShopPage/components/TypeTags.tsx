import { useEffect, useState } from "react"
import Tags from "../../../../Shared/UI/Tags"
import GetTypesAPI from "../../../../Shared/api/GetTypesAPI"



const TypeTags = (name) => {
    let [types, setTypes] = useState()
    let fetchTypes = async () => {
        try {
            let response = await GetTypesAPI()
        } catch(e) {
            console.log(e)
        }
    }
    useEffect(() => {

    })
    // return <Tags name=""/>
}

export default TypeTags