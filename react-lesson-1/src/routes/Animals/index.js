import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animalsSelectors} from "../../store/animals/selectors";
import { getRandomAnimals} from "../../store/animals/action";
import {Button} from "@material-ui/core";
import {Error} from '../../components/Error';
import {Loader} from '../../components/Loader';
import {Figure} from '../../components/Figure';


export const Animals=()=>{
    const data = useSelector(animalsSelectors.getAnimalsData);
    const isError = useSelector(animalsSelectors.getAnimalsError);
    const isLoading = useSelector(animalsSelectors.getAnimalsLoading);
    const dispatch = useDispatch();


    const getData =()=>{
        dispatch(getRandomAnimals)
    };

    useEffect(()=>{
        dispatch(getRandomAnimals)
    })

    return (
        <div>
            <h1>Animals</h1>
            {
                !isError && 
                <Button onClick={getData} disabled={isLoading}>reload</Button>
            }
            {
                isError && (
                    <Error reload={getData}/>
                )}

            {isLoading && <Loader/>}
            {!isLoading && data &&<Figure {...data}/>}
            
        </div>
    )

};