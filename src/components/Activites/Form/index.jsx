import {
	Button,
	Card,
	CardContent,
	CardHeader, TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useActiviteForm } from "../../../hooks/activite";
import { appendActivite,updateActivite } from "../../../redux/activiteSlice";
import { addActivite, editActivite } from "../../../services/activites";
import "./index.css"

const ActiviteForm=(props)=>{
    return(
        <div className='active'>
            <Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
                <form className='activite-form' onSubmit={props.handleSubmit}>
						<TextField
							id='nom'
							label='Nom'
							name='nom'
							value={props.values?.nom}
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
export const ActiviteAdd=(props)=>{
    const[values, onChange]=useActiviteForm();
    const dispatch=useDispatch();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await addActivite(values);
            dispatch(appendActivite(response.data));
            props.handleClose();

        }catch(errors){
            console.error(errors);
        }
    };

    return (
        <ActiviteForm
            title='Ajouter une activité'
            values={values}
            button='Ajouter'
			create={true}
            handleSubmit={handleSubmit}
            oneChange={onChange}
            />
        );
    };
    
    export const ActiviteEdit = (props) => {
        const [values, onChange] = useActiviteForm(props.activite);
        const dispatch = useDispatch();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await editActivite(props.activite.id, values);
                dispatch(updateActivite(response.data));
                props.handleClose();
            } catch (errors) {
                console.error(errors);
            }
        };
    
        return (
            <ActiviteForm
                title='Modifier une activité'
                values={values}
                button='Modifier'
                create={false}
                handleSubmit={handleSubmit}
                onChange={onChange}
            />
        );
    };
    
    export default ActiviteForm;
    