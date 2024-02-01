export async function get(url: string) {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("failed to fetch data");
    }

    // initially data would be of type any
    // here we add more type-safety to convert it to unknown
    // with any - data.blablaData is allowed, not allow with unknown type
    const data = await response.json() as unknown;
    return data;
}