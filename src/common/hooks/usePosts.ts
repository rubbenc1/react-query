import {useQuery} from "react-query";
import fetchSearchResults from "../api/getRequest";

export  const usePosts = (search: string) => {
   return  useQuery(
        ['search', search],
        () => fetchSearchResults(search),
        {
            staleTime: 300000
        }
    )
}