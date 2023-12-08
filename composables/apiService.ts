import {Ref} from "@vue/reactivity";
import {FetchError} from "ofetch";
import {KeysOf, PickFrom} from "#app/composables/asyncData";

interface APIReturnType<T> {
    data: Ref<PickFrom<T extends void ? unknown : T, KeysOf<T extends void ? unknown : T>> | null>,
    pending: Ref<boolean>,
    error: Ref<FetchError<T> | null>
}

export const callBoredAPI = async <T> (): Promise<APIReturnType<T>> => {
    const {data, pending, error} = useFetch<T>('https://www.boredapi.com/api/activity',
        {
            onRequest({request, options}) {
                // Set the request headers
            },
            onRequestError({request, options, error}) {
                // Handle the request errors
            },
            onResponse({request, response, options}) {
                // Process the response data
            },
            onResponseError({request, response, options}) {
                // Handle the response errors
            },
            query: {}
        })
    return {data, pending, error}
}