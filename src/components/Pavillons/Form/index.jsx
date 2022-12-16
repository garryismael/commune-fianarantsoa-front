import {
	Button,
	Card,
	CardContent,
	CardHeader, TextField
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { usePavillonForm } from "../../../hooks/pavillon";
import { appendPavillon,updatePavillon } from "../../../redux/pavillonSlice";
import { addPavillon, editPavillon } from "../../../services/pavillons";
import "./index.css";

const PavillonForm=(props)=>{
    return(
        <div className="pavillon">
            <Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
                <form className='pavillon-form' onSubmit={props.handleSubmit}>
						<TextField
							id='numero'
							label='Numero'
							name='numero'
							value={props.values?.numero}
							variant='outlined'
							onChange={props.onChange}
						/>
                        <Button
							variant='contained'
							className='button-form'
							type='submit'>
							{props.button}
						</Button>
                        </form>
                </CardContent>
                </Card>
                
        </div>
    );
};

export const PavillonAdd=(props)=>{
    const[values, onChange]=usePavillonForm();
    const dispatch=useDispatch();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await addPavillon(values);
            dispatch(appendPavillon(response.data));
            props.handleClose();

        }catch(errors){
            console.error(errors);
        }
    };

    return (
        <PavillonForm
            title='Ajouter un pavillon'
            values={values}
            button='Ajouter'
            create={true}
            handleSubmit={handleSubmit}
            oneChange={onChange}
            />
        );
    };
    
    export const PavillonEdit = (props) => {
        const [values, onChange] = usePavillonForm(props.pavillon);
        const dispatch = useDispatch();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await editPavillon(props.pavillon.id, values);
                dispatch(updatePavillon(response.data));
                props.handleClose();
            } catch (errors) {
                console.error(errors);
            }
        };
    
        return (
            <PavillonForm
                title='Modifier un pavillon'
                values={values}
                button='Modifier'
                create={false}
                handleSubmit={handleSubmit}
                onChange={onChange}
            />
        );
    };
    
    export default PavillonForm;
    