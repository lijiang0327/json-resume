export const typeOfData = (data: unknown) => {
    if (Array.isArray(data)) return 'array';

    return typeof data;
}
