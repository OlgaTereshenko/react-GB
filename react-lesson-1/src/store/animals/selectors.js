export const getAnimalsStore =(store)=> store.animals;
export const getAnimalsData =(store)=>getAnimalsStore(store).data;
export const getAnimalsError=(store)=>getAnimalsStore(store).isError;
export const getAnimalsLoading=(store)=>getAnimalsStore(store).isLoading;

export const animalsSelectors ={
    getAnimalsStore,
    getAnimalsData,
    getAnimalsError,
    getAnimalsLoading
}